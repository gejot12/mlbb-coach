import { MLBB_DRAFT_SEQUENCE, type DraftStep, type DraftTeam } from '@/data/draft-format';
import { HEROES } from '@/data/heroes';

export interface DraftHistoryEntry {
  step: number;
  team: DraftTeam;
  action: DraftStep['action'];
  heroSlug: string;
}

export interface DraftState {
  sequence: DraftStep[];
  stepIndex: number;
  bansA: string[];
  bansB: string[];
  picksA: string[];
  picksB: string[];
  history: DraftHistoryEntry[];
}

export function createInitialDraftState(sequence: DraftStep[] = MLBB_DRAFT_SEQUENCE): DraftState {
  return { sequence, stepIndex: 0, bansA: [], bansB: [], picksA: [], picksB: [], history: [] };
}

export function getCurrentStep(state: DraftState): DraftStep | undefined {
  return state.sequence[state.stepIndex];
}

export function isDraftComplete(state: DraftState): boolean {
  return state.stepIndex >= state.sequence.length;
}

export function getUnavailableHeroSlugs(state: DraftState): Set<string> {
  return new Set([...state.bansA, ...state.bansB, ...state.picksA, ...state.picksB]);
}

export function getAvailableHeroSlugs(state: DraftState): string[] {
  const unavailable = getUnavailableHeroSlugs(state);
  return HEROES.map((h) => h.slug).filter((slug) => !unavailable.has(slug));
}

export type DraftAction =
  | { type: 'SELECT'; heroSlug: string }
  | { type: 'RESET'; sequence?: DraftStep[] };

export function draftReducer(state: DraftState, action: DraftAction): DraftState {
  switch (action.type) {
    case 'RESET':
      return createInitialDraftState(action.sequence ?? state.sequence);
    case 'SELECT': {
      const step = getCurrentStep(state);
      if (!step) return state;

      const unavailable = getUnavailableHeroSlugs(state);
      if (unavailable.has(action.heroSlug)) return state;

      const history: DraftHistoryEntry[] = [
        ...state.history,
        { step: state.stepIndex, team: step.team, action: step.action, heroSlug: action.heroSlug },
      ];
      const next: DraftState = { ...state, stepIndex: state.stepIndex + 1, history };

      if (step.action === 'ban') {
        if (step.team === 'A') next.bansA = [...state.bansA, action.heroSlug];
        else next.bansB = [...state.bansB, action.heroSlug];
      } else {
        if (step.team === 'A') next.picksA = [...state.picksA, action.heroSlug];
        else next.picksB = [...state.picksB, action.heroSlug];
      }

      return next;
    }
    default:
      return state;
  }
}
