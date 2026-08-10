import type { Metadata } from "next";
import { DraftSimulator } from "@/components/draft/draft-simulator";

export const metadata: Metadata = {
  title: "Draft Simulator — MLBB Coach",
  description:
    "Latihan ban/pick ala turnamen MLBB (10 ban, 10 pick) lengkap dengan saran counter-pick otomatis.",
};

export default function DraftSimulatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Draft Pick Simulator</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Format turnamen: 3 ban → 3 pick → 2 ban → 2 pick per tim (total 10 ban, 10 pick). Kedua
        tim dikontrol sendiri — cocok untuk latihan draft sebelum scrim/turnamen.
      </p>

      <div className="mt-8">
        <DraftSimulator />
      </div>
    </div>
  );
}
