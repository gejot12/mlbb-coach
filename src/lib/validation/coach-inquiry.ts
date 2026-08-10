import { z } from "zod";

export const PREFERRED_ROLE_OPTIONS = ["exp", "jungle", "mid", "gold", "roam", "belum yakin"] as const;

export const coachInquirySchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100),
  contact: z.string().trim().min(3, "Isi email atau nomor WhatsApp yang valid").max(200),
  preferred_role: z.enum(PREFERRED_ROLE_OPTIONS).optional().or(z.literal("")),
  current_rank: z.string().trim().max(100).optional().or(z.literal("")),
  desired_schedule: z.string().trim().min(3, "Ceritakan jadwal yang kamu inginkan").max(500),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  // Honeypot: real users never fill this (it's visually hidden). Any value = bot.
  website: z.string().max(0, "Spam terdeteksi").optional().or(z.literal("")),
});

export type CoachInquiryInput = z.infer<typeof coachInquirySchema>;

export function parseCoachInquiryFormData(formData: FormData) {
  return coachInquirySchema.safeParse({
    name: formData.get("name") ?? "",
    contact: formData.get("contact") ?? "",
    preferred_role: formData.get("preferred_role") ?? "",
    current_rank: formData.get("current_rank") ?? "",
    desired_schedule: formData.get("desired_schedule") ?? "",
    notes: formData.get("notes") ?? "",
    website: formData.get("website") ?? "",
  });
}
