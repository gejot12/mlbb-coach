export type DraftTeam = 'A' | 'B';
export type DraftActionType = 'ban' | 'pick';
export type DraftRoom = 'tournament' | 'epic' | 'legend' | 'mythic';

export interface DraftStep {
  team: DraftTeam;
  action: DraftActionType;
}

/**
 * Tournament-style MLBB draft: 3 bans, 3 picks, 2 bans, 2 picks per side (10 bans / 10
 * picks total), based on publicly documented MPL/M Series draft format as of Aug 2026.
 * Re-verify against the current official rulebook before relying on this for real
 * tournament prep — organizers can adjust ban counts between seasons.
 */
export const MLBB_DRAFT_SEQUENCE: DraftStep[] = [
  // Ban Phase 1 — 3 bans each side, alternating
  { team: 'A', action: 'ban' },
  { team: 'B', action: 'ban' },
  { team: 'A', action: 'ban' },
  { team: 'B', action: 'ban' },
  { team: 'A', action: 'ban' },
  { team: 'B', action: 'ban' },
  // Pick Phase 1 — 3 picks each side, snake order
  { team: 'A', action: 'pick' },
  { team: 'B', action: 'pick' },
  { team: 'B', action: 'pick' },
  { team: 'A', action: 'pick' },
  { team: 'A', action: 'pick' },
  { team: 'B', action: 'pick' },
  // Ban Phase 2 — 2 bans each side, alternating
  { team: 'B', action: 'ban' },
  { team: 'A', action: 'ban' },
  { team: 'B', action: 'ban' },
  { team: 'A', action: 'ban' },
  // Pick Phase 2 — 2 picks each side, snake order
  { team: 'B', action: 'pick' },
  { team: 'A', action: 'pick' },
  { team: 'A', action: 'pick' },
  { team: 'B', action: 'pick' },
];

/**
 * Ranked (in-client) draft: unlike the Tournament format above, ranked bans all happen
 * first (in blind/simultaneous waves — represented here as an alternating sequence since
 * this simulator resolves one hero at a time), then all 10 picks run in a single snake
 * order. The pick order and ban counts per rank tier are cross-confirmed from two
 * independent sources as of Aug 2026 (mlbbhub.com's rank-system guide and draft-simulator
 * FAQ) since Moonton doesn't publish a formal rulebook for this: Epic bans 3/side, Legend
 * bans 4/side, Mythic+ bans 5/side arriving in two waves (3 then 2). Re-verify if a future
 * ranked season changes the ban budget.
 */
export const RANKED_PICK_ORDER: DraftStep[] = [
  { team: 'A', action: 'pick' }, // Blue 1
  { team: 'B', action: 'pick' }, // Red 1
  { team: 'B', action: 'pick' }, // Red 2
  { team: 'A', action: 'pick' }, // Blue 2
  { team: 'A', action: 'pick' }, // Blue 3
  { team: 'B', action: 'pick' }, // Red 3
  { team: 'B', action: 'pick' }, // Red 4
  { team: 'A', action: 'pick' }, // Blue 4
  { team: 'A', action: 'pick' }, // Blue 5
  { team: 'B', action: 'pick' }, // Red 5
];

const alternatingBans = (roundsPerSide: number): DraftStep[] =>
  Array.from({ length: roundsPerSide * 2 }, (_, i) => ({
    team: (i % 2 === 0 ? 'A' : 'B') as DraftTeam,
    action: 'ban' as const,
  }));

/** Epic rank: 3 bans/side (1 wave), then the standard ranked snake pick order. */
export const EPIC_DRAFT_SEQUENCE: DraftStep[] = [...alternatingBans(3), ...RANKED_PICK_ORDER];

/** Legend rank: 4 bans/side (1 wave), then the standard ranked snake pick order. */
export const LEGEND_DRAFT_SEQUENCE: DraftStep[] = [...alternatingBans(4), ...RANKED_PICK_ORDER];

/** Mythic+ rank: 5 bans/side across two waves (3 then 2), then the ranked snake pick order. */
export const MYTHIC_DRAFT_SEQUENCE: DraftStep[] = [
  ...alternatingBans(3),
  ...alternatingBans(2),
  ...RANKED_PICK_ORDER,
];

export const DRAFT_SEQUENCES: Record<DraftRoom, DraftStep[]> = {
  tournament: MLBB_DRAFT_SEQUENCE,
  epic: EPIC_DRAFT_SEQUENCE,
  legend: LEGEND_DRAFT_SEQUENCE,
  mythic: MYTHIC_DRAFT_SEQUENCE,
};

export const DRAFT_ROOM_INFO: Record<DraftRoom, { label: string; description: string; bansPerSide: number }> = {
  tournament: {
    label: 'Tournament',
    description: 'Format turnamen MPL/M Series: 3 ban → 3 pick → 2 ban → 2 pick tiap sisi.',
    bansPerSide: 5,
  },
  epic: {
    label: 'Room Epic',
    description: 'Ranked Epic: 3 ban tiap sisi (1 gelombang), lalu pick snake order.',
    bansPerSide: 3,
  },
  legend: {
    label: 'Room Legend',
    description: 'Ranked Legend: 4 ban tiap sisi (1 gelombang), lalu pick snake order.',
    bansPerSide: 4,
  },
  mythic: {
    label: 'Room Mythic',
    description: 'Ranked Mythic+: 5 ban tiap sisi (2 gelombang: 3 lalu 2), lalu pick snake order.',
    bansPerSide: 5,
  },
};

export const ALL_DRAFT_ROOMS: DraftRoom[] = ['tournament', 'epic', 'legend', 'mythic'];
