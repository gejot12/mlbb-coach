import type { Metadata } from "next";
import { CoachInquiryForm } from "@/components/coach/coach-inquiry-form";
import { isSupabaseConfigured, createSupabaseServerClient } from "@/lib/supabase/server";
import { upcomingSessionDates } from "@/data/coach-session-slots";
import type { SessionSlotCount } from "@/lib/types/coach-inquiry";

export const metadata: Metadata = {
  title: "Coach Online — MLBB Coach",
  description: "Ajukan sesi coaching MLBB sesuai role dan jadwal yang kamu mau.",
};

// Booking counts change as people submit, so this page must not be statically cached.
export const dynamic = "force-dynamic";

async function getSlotCounts(dates: string[]): Promise<SessionSlotCount[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("coach_session_slot_counts")
      .select("*")
      .in("session_date", dates);
    if (error) throw error;
    return (data ?? []) as SessionSlotCount[];
  } catch {
    // Booking counts are a nice-to-have on this page, not load-bearing — if this fails,
    // the picker still works, it just can't show "X/10 terisi" until it does.
    return [];
  }
}

export default async function CoachPage() {
  const dates = upcomingSessionDates();
  const slotCounts = await getSlotCounts(dates);

  return (
    <div className="mx-auto max-w-lg px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Coach Online</h1>
      <p className="mt-2 text-foreground/70">
        Isi form di bawah dan kami akan menghubungi kamu untuk atur sesi coaching sesuai role dan
        jadwal yang kamu mau. Ini form pengajuan, bukan booking otomatis — belum ada pembayaran di
        sini.
      </p>

      <div className="mt-8">
        <CoachInquiryForm dates={dates} slotCounts={slotCounts} />
      </div>
    </div>
  );
}
