"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServiceClient } from "@/lib/supabase/server";
import type { CoachInquiryStatus } from "@/lib/types/coach-inquiry";

export async function updateInquiryStatus(inquiryId: string, status: CoachInquiryStatus): Promise<void> {
  const supabase = createSupabaseServiceClient();
  const { error } = await supabase.from("coach_inquiries").update({ status }).eq("id", inquiryId);
  if (error) throw error;
  revalidatePath("/coach/admin");
}

export async function deleteInquiry(inquiryId: string): Promise<void> {
  const supabase = createSupabaseServiceClient();
  const { error } = await supabase.from("coach_inquiries").delete().eq("id", inquiryId);
  if (error) throw error;
  revalidatePath("/coach/admin");
  revalidatePath("/coach");
}
