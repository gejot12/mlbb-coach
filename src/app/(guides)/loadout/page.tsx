import type { Metadata } from "next";
import { LoadoutTabs } from "@/components/loadout/loadout-tabs";

export const metadata: Metadata = {
  title: "Emblem, Spell & Item — MLBB Coach",
  description: "Penjelasan sistem emblem, battle spell, dan katalog item Mobile Legends dalam satu tempat.",
};

export default function LoadoutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Emblem, Spell & Item</h1>
      <p className="mt-2 max-w-2xl text-foreground-muted">
        Tiga hal di luar hero yang menentukan build kamu — pilih tab di bawah.
      </p>

      <div className="mt-8">
        <LoadoutTabs />
      </div>
    </div>
  );
}
