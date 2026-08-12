"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { parseCoachInquiryFormData } from "@/lib/validation/coach-inquiry";
import { SESSION_SLOT_CAPACITY, formatSessionScheduleText } from "@/data/coach-session-slots";

export interface CoachInquiryFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
}

export async function submitCoachInquiry(
  _prevState: CoachInquiryFormState,
  formData: FormData,
): Promise<CoachInquiryFormState> {
  // Honeypot: real visitors never see or fill this field. Pretend success without writing.
  if (formData.get("website")) {
    return { status: "success", message: "Terima kasih! Kami akan menghubungi kamu segera." };
  }

  const result = parseCoachInquiryFormData(formData);
  if (!result.success) {
    return {
      status: "error",
      message: "Ada input yang belum valid, cek lagi form-nya.",
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  const { name, contact, preferred_role, current_rank, session_date, session_slot, notes } = result.data;

  try {
    const supabase = createSupabaseServerClient();

    // Checked here for a fast, friendly error message; the DB trigger (see migration
    // 0003) is the actual source of truth in case two people submit the same last spot
    // at once — this pre-check just avoids that failure mode most of the time.
    const { count, error: countError } = await supabase
      .from("coach_inquiries")
      .select("*", { count: "exact", head: true })
      .eq("session_date", session_date)
      .eq("session_slot", session_slot);
    if (countError) throw countError;
    if ((count ?? 0) >= SESSION_SLOT_CAPACITY) {
      return {
        status: "error",
        message: "Slot ini baru saja penuh — coba pilih jam atau tanggal lain.",
      };
    }

    const { error } = await supabase.from("coach_inquiries").insert({
      name,
      contact,
      preferred_role: preferred_role || null,
      current_rank: current_rank || null,
      session_date,
      session_slot,
      desired_schedule: formatSessionScheduleText(session_date, session_slot),
      notes: notes || null,
    });
    if (error) {
      if (error.message.includes("sudah penuh")) {
        return {
          status: "error",
          message: "Slot ini baru saja penuh — coba pilih jam atau tanggal lain.",
        };
      }
      throw error;
    }
  } catch (error) {
    return {
      status: "error",
      message:
        error instanceof Error && error.message.includes("belum dikonfigurasi")
          ? "Form belum bisa dipakai — database belum terhubung. Coba lagi nanti."
          : "Gagal mengirim, coba lagi sebentar lagi.",
    };
  }

  return { status: "success", message: "Terima kasih! Kami akan menghubungi kamu lewat kontak yang kamu berikan." };
}
