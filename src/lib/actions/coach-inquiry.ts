"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { parseCoachInquiryFormData } from "@/lib/validation/coach-inquiry";

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

  const { name, contact, preferred_role, current_rank, desired_schedule, notes } = result.data;

  try {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.from("coach_inquiries").insert({
      name,
      contact,
      preferred_role: preferred_role || null,
      current_rank: current_rank || null,
      desired_schedule,
      notes: notes || null,
    });
    if (error) throw error;
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
