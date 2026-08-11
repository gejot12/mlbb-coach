import { EMBLEMS } from "@/data/emblems";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const TIER_LABEL: Record<number, string> = { 1: "Tier 1", 2: "Tier 2", 3: "Tier 3 (Ultimate)" };

export function EmblemSection() {
  return (
    <div>
      <p className="max-w-2xl text-foreground-muted">
        Emblem memberi bonus stat pasif dan talent aktif/pasif tambahan di luar item. Level-kan
        emblem pakai Emblem Point (didapat dari level akun & event), lalu pilih satu talent tiap
        tier. Set emblem yang dipakai biasanya mengikuti role hero, bukan cuma damage type.
      </p>

      <div className="mt-6 space-y-4">
        {EMBLEMS.map((emblem) => (
          <Card key={emblem.slug}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-xl font-semibold">{emblem.name}</h2>
              <div className="flex flex-wrap gap-1.5">
                {emblem.bestFor.map((role) => (
                  <Badge key={role}>{role}</Badge>
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-foreground-muted">{emblem.focus}</p>

            <div className="mt-4 space-y-2">
              {emblem.talents.map((talent) => (
                <div key={talent.name} className="rounded-md border border-border-subtle p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="accent">{TIER_LABEL[talent.tier]}</Badge>
                    <span className="font-medium">{talent.name}</span>
                  </div>
                  <p className="mt-1 text-sm text-foreground-muted">{talent.effect}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-xs text-foreground-muted/70">
        Nama dan efek talent bersifat kualitatif — Moonton cukup sering rebalance angka persisnya
        per patch, jadi cek nilai pasti langsung di game sebelum menganggapnya final.
      </p>
    </div>
  );
}
