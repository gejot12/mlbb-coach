export type DraftTeam = 'A' | 'B';
export type DraftActionType = 'ban' | 'pick';

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
