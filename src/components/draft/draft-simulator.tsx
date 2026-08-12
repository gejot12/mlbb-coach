"use client";

import { useMemo, useReducer, useState } from "react";
import {
  createInitialDraftState,
  draftReducer,
  getAvailableHeroSlugs,
  getCurrentStep,
  isDraftComplete,
} from "@/lib/draft/engine";
import { getSuggestions } from "@/lib/draft/suggestions";
import { getRecommendedEmblem } from "@/lib/draft/emblem-suggestion";
import {
  ALL_DRAFT_ROOMS,
  DRAFT_ROOM_INFO,
  DRAFT_SEQUENCES,
  type DraftRoom,
  type DraftTeam,
} from "@/data/draft-format";
import { getHero } from "@/data/heroes";
import { MSC_2026_META_PRIORITY } from "@/data/meta-priority";
import { TeamPanel } from "./team-panel";
import { HeroGrid } from "./hero-grid";
import { SuggestionPanel } from "./suggestion-panel";

function SideSelect({
  room,
  onRoomChange,
  onSelect,
}: {
  room: DraftRoom;
  onRoomChange: (room: DraftRoom) => void;
  onSelect: (side: DraftTeam) => void;
}) {
  return (
    <div className="rounded-xl border border-border-subtle bg-background-elevated/60 p-8 text-center">
      <h2 className="font-display text-xl font-semibold">Pilih room draft</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-foreground-muted">
        Format ban/pick beda tergantung room: Tournament ala MPL/M Series, atau ranked Epic/Legend/Mythic
        seperti di client game.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {ALL_DRAFT_ROOMS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => onRoomChange(r)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              room === r
                ? "border-accent-amber/60 bg-accent-amber/10 text-accent-amber"
                : "border-border-subtle hover:border-white/30"
            }`}
          >
            {DRAFT_ROOM_INFO[r].label}
          </button>
        ))}
      </div>
      <p className="mx-auto mt-3 max-w-md text-xs text-foreground-muted">{DRAFT_ROOM_INFO[room].description}</p>

      <h3 className="mt-8 font-display text-lg font-semibold">Pilih posisi kamu</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-foreground-muted">
        First Pick dan Second Pick punya prioritas ban/pick yang beda. Pilih salah satu supaya simulator tahu
        mana &ldquo;kamu&rdquo; dan mana &ldquo;lawan&rdquo;.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => onSelect("A")}
          className="rounded-full bg-gradient-to-r from-accent-violet via-accent-fuchsia to-accent-amber px-6 py-3 font-display font-semibold text-white"
        >
          First Pick (Tim A)
        </button>
        <button
          type="button"
          onClick={() => onSelect("B")}
          className="rounded-full border border-border-subtle px-6 py-3 font-display font-semibold hover:border-white/30"
        >
          Second Pick (Tim B)
        </button>
      </div>
    </div>
  );
}

export function DraftSimulator() {
  const [room, setRoom] = useState<DraftRoom>("tournament");
  const [playerSide, setPlayerSide] = useState<DraftTeam | null>(null);
  const [state, dispatch] = useReducer(draftReducer, undefined, createInitialDraftState);

  function startDraft(side: DraftTeam) {
    dispatch({ type: "RESET", sequence: DRAFT_SEQUENCES[room] });
    setPlayerSide(side);
  }

  const currentStep = getCurrentStep(state);
  const complete = isDraftComplete(state);
  const availableSlugs = useMemo(() => getAvailableHeroSlugs(state), [state]);

  const suggestions = useMemo(() => {
    if (!currentStep || currentStep.action !== "pick") return [];
    return getSuggestions(state, currentStep.team, availableSlugs);
  }, [state, currentStep, availableSlugs]);

  // Ban phase has no counter-pick logic to lean on yet (no ally hero picked), so during
  // bans we surface heroes worth banning based on current competitive meta priority instead.
  const banRecommendations = useMemo(() => {
    if (!currentStep || currentStep.action !== "ban") return [];
    const availableSet = new Set(availableSlugs);
    return MSC_2026_META_PRIORITY.filter((e) => availableSet.has(e.slug))
      .sort((a, b) => (a.tier === b.tier ? 0 : a.tier === "premier" ? -1 : 1))
      .map((e) => e.slug);
  }, [currentStep, availableSlugs]);

  const priorityHeroSlugs = useMemo(() => {
    if (currentStep?.action === "ban") return banRecommendations;
    return suggestions.map((s) => s.heroSlug);
  }, [currentStep, banRecommendations, suggestions]);

  const emblemSuggestion = useMemo(() => {
    if (!currentStep || currentStep.action !== "pick") return null;
    return getRecommendedEmblem(state, currentStep.team);
  }, [state, currentStep]);

  const stepsDone = state.stepIndex;
  const totalSteps = state.sequence.length;

  if (!playerSide) {
    return <SideSelect room={room} onRoomChange={setRoom} onSelect={startDraft} />;
  }

  const suggestionsAreForPlayer = currentStep?.team === playerSide;
  const banSlots = DRAFT_ROOM_INFO[room].bansPerSide;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted/70">
            {DRAFT_ROOM_INFO[room].label}
          </p>
          {complete ? (
            <p className="font-semibold text-emerald-400">Draft selesai!</p>
          ) : (
            <p className="font-semibold">
              Langkah {stepsDone + 1} / {totalSteps} —{" "}
              {currentStep?.team === playerSide ? "Giliran Kamu" : "Giliran Lawan"}{" "}
              <span className="uppercase text-accent-amber">{currentStep?.action}</span>
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPlayerSide(null)}
            className="rounded-md border border-border-subtle px-3 py-1.5 text-sm font-medium hover:border-white/30"
          >
            Ganti Room / Sisi
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "RESET" })}
            className="rounded-md border border-border-subtle px-3 py-1.5 text-sm font-medium hover:border-accent-amber/50 hover:text-accent-amber"
          >
            Reset Draft
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <TeamPanel
          team="A"
          label={playerSide === "A" ? "Kamu (First Pick)" : "Lawan (First Pick)"}
          bans={state.bansA}
          picks={state.picksA}
          activeTeam={currentStep?.team}
          banSlots={banSlots}
        />
        <div className="hidden items-center justify-center text-sm font-semibold text-foreground-muted/50 lg:flex">
          VS
        </div>
        <TeamPanel
          team="B"
          label={playerSide === "B" ? "Kamu (Second Pick)" : "Lawan (Second Pick)"}
          bans={state.bansB}
          picks={state.picksB}
          activeTeam={currentStep?.team}
          align="right"
          banSlots={banSlots}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_280px]">
        <div>
          <h2 className="mb-2 font-semibold">{complete ? "Draft Selesai" : "Pilih Hero"}</h2>
          <HeroGrid
            availableSlugs={new Set(availableSlugs)}
            suggestedSlugs={priorityHeroSlugs}
            disabled={complete}
            onSelect={(slug) => dispatch({ type: "SELECT", heroSlug: slug })}
          />
        </div>
        <div className="space-y-4">
          <SuggestionPanel
            suggestions={suggestions}
            title={suggestionsAreForPlayer ? "Saran Pick untuk Kamu" : "Prediksi Pick Lawan"}
          />
          {emblemSuggestion && (
            <div className="rounded-xl border border-border-subtle bg-background-elevated/60 p-5">
              <h2 className="font-semibold">Saran Emblem</h2>
              <p className="mt-2 text-sm">
                <span className="font-medium text-accent-amber">{emblemSuggestion.emblem.name}</span>
              </p>
              <p className="mt-1 text-xs text-foreground-muted">{emblemSuggestion.reason}</p>
            </div>
          )}
        </div>
      </div>

      {complete && (
        <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <h2 className="font-semibold text-emerald-400">Ringkasan Draft</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium">{playerSide === "A" ? "Kamu (Tim A)" : "Lawan (Tim A)"}</p>
              <p className="text-sm text-foreground-muted">
                {state.picksA.map((slug) => getHero(slug)?.name).join(", ")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">{playerSide === "B" ? "Kamu (Tim B)" : "Lawan (Tim B)"}</p>
              <p className="text-sm text-foreground-muted">
                {state.picksB.map((slug) => getHero(slug)?.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
