import type { Metadata } from "next";
import { HeroList } from "@/components/heroes/hero-list";

export const metadata: Metadata = {
  title: "Hero Guide — MLBB Coach",
  description: "Item build, counter hero, dan rotasi untuk setiap hero Mobile Legends.",
};

export default function HeroesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Hero Guide</h1>
      <p className="mt-2 text-foreground-muted">
        Diurutkan dari hero terbaru ke terlama. Pilih hero untuk lihat build item, counter, sinergi, dan rotasi.
      </p>
      <p className="mt-1 text-xs text-foreground-muted/70">
        Urutan rilis berdasarkan tahun (perkiraan dari pengetahuan umum, bukan tanggal presisi terverifikasi).
      </p>

      <div className="mt-6">
        <HeroList />
      </div>
    </div>
  );
}
