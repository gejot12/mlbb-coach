import { getHero } from '@/data/heroes';
import type { DraftTeam } from '@/data/draft-format';
import type { DraftState } from './engine';

export interface Suggestion {
  heroSlug: string;
  score: number;
  reasons: string[];
}

const WEIGHTS = { counter: 2, synergy: 1, counteredBy: -2 } as const;

/**
 * Scores available heroes for `team` based on hero data already authored for the guide
 * pages (strongAgainst/weakAgainst/synergizesWith) — no separate matchup matrix needed.
 */
export function getSuggestions(
  state: DraftState,
  team: DraftTeam,
  availableSlugs: string[],
  limit = 5,
): Suggestion[] {
  const allyPicks = team === 'A' ? state.picksA : state.picksB;
  const enemyPicks = team === 'A' ? state.picksB : state.picksA;

  const scored: Suggestion[] = availableSlugs.map((slug) => {
    const hero = getHero(slug);
    if (!hero) return { heroSlug: slug, score: 0, reasons: [] };

    let score = 0;
    const reasons: string[] = [];

    for (const enemySlug of enemyPicks) {
      const enemy = getHero(enemySlug);
      if (!enemy) continue;
      if (hero.strongAgainst.includes(enemySlug)) {
        score += WEIGHTS.counter;
        reasons.push(`Counter ${enemy.name}`);
      }
      if (hero.weakAgainst.includes(enemySlug)) {
        score += WEIGHTS.counteredBy;
        reasons.push(`Rentan lawan ${enemy.name}`);
      }
    }

    for (const allySlug of allyPicks) {
      const ally = getHero(allySlug);
      if (!ally) continue;
      if (hero.synergizesWith.includes(allySlug) || ally.synergizesWith.includes(slug)) {
        score += WEIGHTS.synergy;
        reasons.push(`Sinergi dengan ${ally.name}`);
      }
    }

    return { heroSlug: slug, score, reasons };
  });

  return scored
    .filter((s) => s.score !== 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
