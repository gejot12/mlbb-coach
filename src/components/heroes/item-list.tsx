"use client";

import { useMemo, useState } from "react";
import { ITEMS } from "@/data/items";
import type { ItemCategory } from "@/lib/types/item";
import { Card } from "@/components/ui/card";

const CATEGORY_LABEL: Record<ItemCategory, string> = {
  attack: "Attack (Physical)",
  magic: "Magic",
  defense: "Defense",
  movement: "Movement",
  jungle: "Jungle",
  roam: "Roam / Support",
};

const CATEGORIES: ItemCategory[] = ["attack", "magic", "defense", "movement", "jungle", "roam"];

export function ItemList() {
  const [categoryFilter, setCategoryFilter] = useState<ItemCategory | "all">("all");

  const items = useMemo(() => {
    if (categoryFilter === "all") return ITEMS;
    return ITEMS.filter((item) => item.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setCategoryFilter("all")}
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            categoryFilter === "all" ? "bg-accent-amber text-black" : "bg-white/10 text-foreground-muted hover:text-foreground"
          }`}
        >
          Semua
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setCategoryFilter(category)}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              categoryFilter === category ? "bg-accent-amber text-black" : "bg-white/10 text-foreground-muted hover:text-foreground"
            }`}
          >
            {CATEGORY_LABEL[category]}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.slug}>
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-medium">{item.name}</h2>
              <span className="text-xs text-foreground-muted">{item.price} gold</span>
            </div>
            <p className="mt-1.5 text-sm text-foreground-muted">{item.effect}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
