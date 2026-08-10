"use client";

import { useMemo, useState } from "react";
import { HEROES, ALL_ROLES } from "@/data/heroes";
import { getMetaPriority } from "@/data/meta-priority";
import type { Role } from "@/lib/types/hero";
import { Badge } from "@/components/ui/badge";
import { HeroAvatar } from "@/components/ui/hero-avatar";

export function HeroGrid({
  availableSlugs,
  suggestedSlugs = [],
  onSelect,
  disabled,
}: {
  availableSlugs: Set<string>;
  suggestedSlugs?: string[];
  onSelect: (slug: string) => void;
  disabled?: boolean;
}) {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<Role | "all">("all");
  const suggestedSet = useMemo(() => new Set(suggestedSlugs), [suggestedSlugs]);

  const heroes = useMemo(() => {
    return HEROES.filter((hero) => {
      if (roleFilter !== "all" && !hero.roles.includes(roleFilter)) return false;
      if (search && !hero.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [roleFilter, search]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari hero…"
          className="rounded-md border border-black/10 bg-transparent px-3 py-1.5 text-sm outline-none focus:border-amber-500/60 dark:border-white/10"
        />
        <div className="flex flex-wrap gap-1">
          <button
            type="button"
            onClick={() => setRoleFilter("all")}
            className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
              roleFilter === "all" ? "bg-amber-500 text-black" : "bg-black/5 dark:bg-white/10"
            }`}
          >
            semua
          </button>
          {ALL_ROLES.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setRoleFilter(role)}
              className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                roleFilter === role ? "bg-amber-500 text-black" : "bg-black/5 dark:bg-white/10"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {heroes.map((hero) => {
          const available = availableSlugs.has(hero.slug);
          const suggested = suggestedSet.has(hero.slug);
          return (
            <button
              key={hero.slug}
              type="button"
              disabled={!available || disabled}
              onClick={() => onSelect(hero.slug)}
              className={`flex flex-col items-start gap-1 rounded-lg border p-2.5 text-left transition-colors ${
                !available
                  ? "cursor-not-allowed border-black/5 opacity-30 dark:border-white/5"
                  : suggested
                    ? "border-amber-500/60 bg-amber-500/10 hover:bg-amber-500/20"
                    : "border-black/10 hover:border-amber-500/40 dark:border-white/10"
              }`}
            >
              <div className="flex w-full items-start justify-between">
                <HeroAvatar slug={hero.slug} name={hero.name} size={36} className="rounded-md" />
                {getMetaPriority(hero.slug) && <span title="Prioritas meta MSC 2026">🔥</span>}
              </div>
              <span className="text-sm font-medium">{hero.name}</span>
              <span className="flex flex-wrap gap-1">
                {hero.roles.map((r) => (
                  <Badge key={r}>{r}</Badge>
                ))}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
