"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HEROES, ALL_ROLES } from "@/data/heroes";
import { getHeroReleaseYear } from "@/data/hero-release-years";
import type { Role } from "@/lib/types/hero";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HeroAvatar } from "@/components/ui/hero-avatar";

const SORTED_HEROES = [...HEROES].sort((a, b) => {
  const yearDiff = getHeroReleaseYear(b.slug) - getHeroReleaseYear(a.slug);
  if (yearDiff !== 0) return yearDiff;
  return a.name.localeCompare(b.name);
});

export function HeroList() {
  const [roleFilter, setRoleFilter] = useState<Role | "all">("all");

  const heroes = useMemo(() => {
    if (roleFilter === "all") return SORTED_HEROES;
    return SORTED_HEROES.filter((hero) => hero.roles.includes(roleFilter));
  }, [roleFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setRoleFilter("all")}
          className={`rounded-full px-3 py-1 text-sm font-medium capitalize ${
            roleFilter === "all" ? "bg-accent-amber text-black" : "bg-white/10 text-foreground-muted hover:text-foreground"
          }`}
        >
          Semua role
        </button>
        {ALL_ROLES.map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => setRoleFilter(role)}
            className={`rounded-full px-3 py-1 text-sm font-medium capitalize ${
              roleFilter === role ? "bg-accent-amber text-black" : "bg-white/10 text-foreground-muted hover:text-foreground"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {heroes.map((hero) => {
          const year = getHeroReleaseYear(hero.slug);
          return (
            <Link key={hero.slug} href={`/heroes/${hero.slug}`} className="group">
              <Card className="h-full transition-colors group-hover:border-accent-violet/50">
                <div className="flex items-start gap-3">
                  <HeroAvatar slug={hero.slug} name={hero.name} size={48} className="shrink-0 rounded-[10px]" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="font-semibold group-hover:text-gradient-brand">{hero.name}</h2>
                      {year > 0 && <span className="shrink-0 text-xs text-foreground-muted">{year}</span>}
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {hero.roles.map((role) => (
                        <Badge key={role}>{role}</Badge>
                      ))}
                      <Badge tone="accent">{hero.difficulty}</Badge>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-foreground-muted">{hero.summary}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
