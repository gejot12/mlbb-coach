import type { Metadata } from "next";
import { CoachInquiryForm } from "@/components/coach/coach-inquiry-form";

export const metadata: Metadata = {
  title: "Coach Online — MLBB Coach",
  description: "Ajukan sesi coaching MLBB sesuai role dan jadwal yang kamu mau.",
};

export default function CoachPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Coach Online</h1>
      <p className="mt-2 text-foreground/70">
        Isi form di bawah dan kami akan menghubungi kamu untuk atur sesi coaching sesuai role dan
        jadwal yang kamu mau. Ini form pengajuan, bukan booking otomatis — belum ada pembayaran di
        sini.
      </p>

      <div className="mt-8">
        <CoachInquiryForm />
      </div>
    </div>
  );
}
