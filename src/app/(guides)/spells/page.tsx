import type { Metadata } from "next";
import { BATTLE_SPELLS } from "@/data/spells";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Battle Spell — MLBB Coach",
  description: "Penjelasan seluruh battle spell Mobile Legends dan kapan sebaiknya dipakai.",
};

export default function SpellsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Battle Spell</h1>
      <p className="mt-2 max-w-2xl text-foreground-muted">
        Battle spell adalah kemampuan tambahan di luar skill hero, satu slot per hero per match. Pilihan
        spell yang tepat sering menentukan menang-kalahnya trade atau teamfight.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {BATTLE_SPELLS.map((spell) => (
          <Card key={spell.slug}>
            <h2 className="font-display text-lg font-semibold">{spell.name}</h2>
            <p className="mt-1.5 text-sm text-foreground-muted">{spell.effect}</p>
            <p className="mt-2 text-sm">
              <span className="font-medium text-accent-amber">Kapan pakai: </span>
              {spell.usage}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {spell.recommendedRoles.map((role) => (
                <Badge key={role}>{role}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
