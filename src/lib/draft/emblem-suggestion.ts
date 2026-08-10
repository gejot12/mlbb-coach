import { getHero } from "@/data/heroes";
import { getEmblem } from "@/data/emblems";
import type { Emblem } from "@/lib/types/emblem";
import type { DraftTeam } from "@/data/draft-format";
import type { DraftState } from "./engine";

export interface EmblemSuggestion {
  emblem: Emblem;
  reason: string;
}

/**
 * Heuristic emblem suggestion based on the enemy's picks so far — a rough guide, not a
 * guarantee. Real emblem choice also depends on your own hero and matchup specifics.
 */
export function getRecommendedEmblem(state: DraftState, team: DraftTeam): EmblemSuggestion | null {
  const enemySlugs = team === "A" ? state.picksB : state.picksA;
  if (enemySlugs.length === 0) return null;

  const enemyHeroes = enemySlugs.map(getHero).filter((h): h is NonNullable<typeof h> => Boolean(h));
  const diveCount = enemyHeroes.filter((h) => h.roles.includes("assassin")).length;
  const tankCount = enemyHeroes.filter((h) => h.roles.includes("tank")).length;
  const squishyCount = enemyHeroes.filter((h) => h.roles.includes("mage") || h.roles.includes("marksman")).length;

  if (diveCount >= 2) {
    const emblem = getEmblem("tank")!;
    return {
      emblem,
      reason: `Lawan punya ${diveCount} hero assassin/dive — Tank Emblem menambah survivability supaya tidak gampang di-burst duluan.`,
    };
  }
  if (tankCount >= 2) {
    const emblem = getEmblem("physical")!;
    return {
      emblem,
      reason: `Lawan punya ${tankCount} hero tank — Physical Emblem (talent Bravery) membantu menembus defense tebal.`,
    };
  }
  if (squishyCount >= 2 && diveCount === 0) {
    const emblem = getEmblem("assassin")!;
    return {
      emblem,
      reason: "Komposisi lawan minim tank/dive — Assassin Emblem cocok untuk snowball agresif ke backline mereka.",
    };
  }
  const emblem = getEmblem("magic")!;
  return { emblem, reason: "Komposisi lawan masih campuran — Magic Emblem jadi pilihan aman untuk damage konsisten." };
}
