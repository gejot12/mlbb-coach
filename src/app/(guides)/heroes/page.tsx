import Link from "next/link";
import type { Metadata } from "next";
import { HEROES } from "@/data/heroes";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HeroAvatar } from "@/components/ui/hero-avatar";

export const metadata: Metadata = {
  title: "Hero Guide — MLBB Coach",
  description: "Item build, counter hero, dan rotasi untuk setiap hero Mobile Legends.",
};

export default function HeroesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Hero Guide</h1>
      <p className="mt-2 text-foreground/70">
        Pilih hero untuk lihat build item, hero yang di-counter, hero yang mengcounter, sinergi, dan rotasi.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HEROES.map((hero) => (
          <Link key={hero.slug} href={`/heroes/${hero.slug}`} className="group">
            <Card className="h-full transition-colors group-hover:border-accent-violet/50">
              <div className="flex items-start gap-3">
                <HeroAvatar slug={hero.slug} name={hero.name} size={48} className="shrink-0 rounded-[10px]" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-semibold group-hover:text-gradient-brand">{hero.name}</h2>
                    <Badge tone="accent">{hero.difficulty}</Badge>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {hero.roles.map((role) => (
                      <Badge key={role}>{role}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-foreground-muted">{hero.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
