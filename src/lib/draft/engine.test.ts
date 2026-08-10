import { describe, expect, it } from "vitest";
import { MLBB_DRAFT_SEQUENCE } from "@/data/draft-format";
import { HEROES } from "@/data/heroes";
import {
  createInitialDraftState,
  draftReducer,
  getAvailableHeroSlugs,
  getCurrentStep,
  isDraftComplete,
} from "./engine";

describe("MLBB_DRAFT_SEQUENCE", () => {
  it("has 10 bans and 10 picks total, 5 each per side", () => {
    const bansA = MLBB_DRAFT_SEQUENCE.filter((s) => s.team === "A" && s.action === "ban").length;
    const bansB = MLBB_DRAFT_SEQUENCE.filter((s) => s.team === "B" && s.action === "ban").length;
    const picksA = MLBB_DRAFT_SEQUENCE.filter((s) => s.team === "A" && s.action === "pick").length;
    const picksB = MLBB_DRAFT_SEQUENCE.filter((s) => s.team === "B" && s.action === "pick").length;

    expect(bansA).toBe(5);
    expect(bansB).toBe(5);
    expect(picksA).toBe(5);
    expect(picksB).toBe(5);
    expect(MLBB_DRAFT_SEQUENCE).toHaveLength(20);
  });
});

describe("draftReducer", () => {
  it("plays out a full draft with no duplicate selections", () => {
    let state = createInitialDraftState();

    for (let i = 0; i < MLBB_DRAFT_SEQUENCE.length; i++) {
      const step = getCurrentStep(state);
      expect(step).toEqual(MLBB_DRAFT_SEQUENCE[i]);

      const available = getAvailableHeroSlugs(state);
      expect(available.length).toBe(HEROES.length - i);

      state = draftReducer(state, { type: "SELECT", heroSlug: available[0] });
    }

    expect(isDraftComplete(state)).toBe(true);
    expect(state.bansA).toHaveLength(5);
    expect(state.bansB).toHaveLength(5);
    expect(state.picksA).toHaveLength(5);
    expect(state.picksB).toHaveLength(5);

    const allSelections = [...state.bansA, ...state.bansB, ...state.picksA, ...state.picksB];
    expect(new Set(allSelections).size).toBe(allSelections.length);
  });

  it("ignores selecting a hero that is already unavailable", () => {
    let state = createInitialDraftState();
    const firstAvailable = getAvailableHeroSlugs(state)[0];
    state = draftReducer(state, { type: "SELECT", heroSlug: firstAvailable });

    const stepIndexAfterFirst = state.stepIndex;
    state = draftReducer(state, { type: "SELECT", heroSlug: firstAvailable });

    expect(state.stepIndex).toBe(stepIndexAfterFirst);
  });

  it("RESET returns to the initial state", () => {
    let state = createInitialDraftState();
    state = draftReducer(state, { type: "SELECT", heroSlug: getAvailableHeroSlugs(state)[0] });
    state = draftReducer(state, { type: "RESET" });

    expect(state).toEqual(createInitialDraftState());
  });

  it("is a no-op once the draft is complete", () => {
    let state = createInitialDraftState();
    for (let i = 0; i < MLBB_DRAFT_SEQUENCE.length; i++) {
      state = draftReducer(state, { type: "SELECT", heroSlug: getAvailableHeroSlugs(state)[0] });
    }
    const complete = state;
    const after = draftReducer(state, { type: "SELECT", heroSlug: "any-slug" });
    expect(after).toEqual(complete);
  });
});
