import { describe, expect, it } from "vitest";
import {
  ALL_DRAFT_ROOMS,
  DRAFT_ROOM_INFO,
  DRAFT_SEQUENCES,
  MLBB_DRAFT_SEQUENCE,
  type DraftStep,
} from "@/data/draft-format";
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

describe("ranked room sequences", () => {
  it.each([
    ["epic", 3],
    ["legend", 4],
    ["mythic", 5],
  ] as const)("%s bans %i heroes per side, then a full 5v5 snake pick", (room, bansPerSide) => {
    const sequence = DRAFT_SEQUENCES[room];
    const bansA = sequence.filter((s) => s.team === "A" && s.action === "ban").length;
    const bansB = sequence.filter((s) => s.team === "B" && s.action === "ban").length;
    const picksA = sequence.filter((s) => s.team === "A" && s.action === "pick").length;
    const picksB = sequence.filter((s) => s.team === "B" && s.action === "pick").length;

    expect(bansA).toBe(bansPerSide);
    expect(bansB).toBe(bansPerSide);
    expect(picksA).toBe(5);
    expect(picksB).toBe(5);
    expect(DRAFT_ROOM_INFO[room].bansPerSide).toBe(bansPerSide);
  });

  it("all bans happen before any pick (unlike the Tournament format)", () => {
    for (const room of ["epic", "legend", "mythic"] as const) {
      const sequence = DRAFT_SEQUENCES[room];
      const firstPickIndex = sequence.findIndex((s) => s.action === "pick");
      const lastBanIndex = sequence.map((s) => s.action).lastIndexOf("ban");
      expect(lastBanIndex).toBeLessThan(firstPickIndex);
    }
  });

  it("pick order is the same ranked snake order across all three ranked rooms", () => {
    const pickSequences = (["epic", "legend", "mythic"] as const).map((room) =>
      DRAFT_SEQUENCES[room].filter((s) => s.action === "pick"),
    );
    expect(pickSequences[0]).toEqual(pickSequences[1]);
    expect(pickSequences[1]).toEqual(pickSequences[2]);
  });
});

describe.each(ALL_DRAFT_ROOMS)("draftReducer with the %s sequence", (room) => {
  const sequence: DraftStep[] = DRAFT_SEQUENCES[room];

  it("plays out a full draft with no duplicate selections", () => {
    let state = createInitialDraftState(sequence);

    for (let i = 0; i < sequence.length; i++) {
      const step = getCurrentStep(state);
      expect(step).toEqual(sequence[i]);

      const available = getAvailableHeroSlugs(state);
      expect(available.length).toBe(HEROES.length - i);

      state = draftReducer(state, { type: "SELECT", heroSlug: available[0] });
    }

    expect(isDraftComplete(state)).toBe(true);
    expect(state.picksA).toHaveLength(5);
    expect(state.picksB).toHaveLength(5);

    const allSelections = [...state.bansA, ...state.bansB, ...state.picksA, ...state.picksB];
    expect(new Set(allSelections).size).toBe(allSelections.length);
  });

  it("ignores selecting a hero that is already unavailable", () => {
    let state = createInitialDraftState(sequence);
    const firstAvailable = getAvailableHeroSlugs(state)[0];
    state = draftReducer(state, { type: "SELECT", heroSlug: firstAvailable });

    const stepIndexAfterFirst = state.stepIndex;
    state = draftReducer(state, { type: "SELECT", heroSlug: firstAvailable });

    expect(state.stepIndex).toBe(stepIndexAfterFirst);
  });

  it("RESET returns to the initial state for the same sequence", () => {
    let state = createInitialDraftState(sequence);
    state = draftReducer(state, { type: "SELECT", heroSlug: getAvailableHeroSlugs(state)[0] });
    state = draftReducer(state, { type: "RESET" });

    expect(state).toEqual(createInitialDraftState(sequence));
  });

  it("RESET can switch to a different room's sequence", () => {
    let state = createInitialDraftState(sequence);
    state = draftReducer(state, { type: "SELECT", heroSlug: getAvailableHeroSlugs(state)[0] });

    const otherRoom = room === "tournament" ? "epic" : "tournament";
    state = draftReducer(state, { type: "RESET", sequence: DRAFT_SEQUENCES[otherRoom] });

    expect(state).toEqual(createInitialDraftState(DRAFT_SEQUENCES[otherRoom]));
  });

  it("is a no-op once the draft is complete", () => {
    let state = createInitialDraftState(sequence);
    for (let i = 0; i < sequence.length; i++) {
      state = draftReducer(state, { type: "SELECT", heroSlug: getAvailableHeroSlugs(state)[0] });
    }
    const complete = state;
    const after = draftReducer(state, { type: "SELECT", heroSlug: "any-slug" });
    expect(after).toEqual(complete);
  });
});
