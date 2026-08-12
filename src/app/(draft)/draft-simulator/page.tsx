import type { Metadata } from "next";
import { DraftSimulator } from "@/components/draft/draft-simulator";

export const metadata: Metadata = {
  title: "Draft Simulator — MLBB Coach",
  description:
    "Latihan ban/pick ala turnamen atau ranked MLBB lengkap dengan saran counter-pick otomatis.",
};

export default function DraftSimulatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Draft Pick Simulator</h1>
      <p className="mt-2 max-w-2xl text-foreground-muted">
        Pilih format Tournament (ala MPL/M Series) atau ranked Epic/Legend/Mythic seperti di
        client game — detail ban/pick tiap format muncul setelah kamu pilih room di bawah.
      </p>

      <div className="mt-8">
        <DraftSimulator />
      </div>
    </div>
  );
}
