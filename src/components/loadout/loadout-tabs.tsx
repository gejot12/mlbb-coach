"use client";

import { useState } from "react";
import { EmblemSection } from "./emblem-section";
import { SpellSection } from "./spell-section";
import { ItemSection } from "./item-section";

const TABS = [
  { key: "emblem", label: "Emblem" },
  { key: "spell", label: "Battle Spell" },
  { key: "item", label: "Item" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function LoadoutTabs() {
  const [tab, setTab] = useState<TabKey>("emblem");

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 border-b border-border-subtle pb-4">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              tab === t.key
                ? "bg-gradient-to-r from-accent-violet via-accent-fuchsia to-accent-amber text-white"
                : "bg-white/10 text-foreground-muted hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "emblem" && <EmblemSection />}
        {tab === "spell" && <SpellSection />}
        {tab === "item" && <ItemSection />}
      </div>
    </div>
  );
}
