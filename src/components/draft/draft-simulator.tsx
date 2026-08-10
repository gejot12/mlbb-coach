"use client";

import { useMemo, useReducer } from "react";
import {
  createInitialDraftState,
  draftReducer,
  getAvailableHeroSlugs,
  getCurrentStep,
  isDraftComplete,
} from "@/lib/draft/engine";
import { getSuggestions } from "@/lib/draft/suggestions";
import { MLBB_DRAFT_SEQUENCE } from "@/data/draft-format";
import { getHero } from "@/data/heroes";
import { TeamPanel } from "./team-panel";
import { HeroGrid } from "./hero-grid";
import { SuggestionPanel } from "./suggestion-panel";

export function DraftSimulator() {
  const [state, dispatch] = useReducer(draftReducer, undefined, createInitialDraftState);

  const currentStep = getCurrentStep(state);
  const complete = isDraftComplete(state);
  const availableSlugs = useMemo(() => getAvailableHeroSlugs(state), [state]);

  const suggestions = useMemo(() => {
    if (!currentStep || currentStep.action !== "pick") return [];
    return getSuggestions(state, currentStep.team, availableSlugs);
  }, [state, currentStep, availableSlugs]);

  const stepsDone = state.stepIndex;
  const totalSteps = MLBB_DRAFT_SEQUENCE.length;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          {complete ? (
            <p className="font-semibold text-emerald-600 dark:text-emerald-400">Draft selesai!</p>
          ) : (
            <p className="font-semibold">
              Langkah {stepsDone + 1} / {totalSteps} — Tim {currentStep?.team}{" "}
              <span className="uppercase text-amber-500">{currentStep?.action}</span>
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          className="rounded-md border border-black/10 px-3 py-1.5 text-sm font-medium hover:border-amber-500/50 hover:text-amber-500 dark:border-white/10"
        >
          Reset Draft
        </button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <TeamPanel team="A" bans={state.bansA} picks={state.picksA} activeTeam={currentStep?.team} />
        <div className="hidden items-center justify-center text-sm font-semibold text-foreground/30 lg:flex">
          VS
        </div>
        <TeamPanel team="B" bans={state.bansB} picks={state.picksB} activeTeam={currentStep?.team} align="right" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_280px]">
        <div>
          <h2 className="mb-2 font-semibold">{complete ? "Draft Selesai" : "Pilih Hero"}</h2>
          <HeroGrid
            availableSlugs={new Set(availableSlugs)}
            suggestedSlugs={suggestions.map((s) => s.heroSlug)}
            disabled={complete}
            onSelect={(slug) => dispatch({ type: "SELECT", heroSlug: slug })}
          />
        </div>
        <SuggestionPanel suggestions={suggestions} />
      </div>

      {complete && (
        <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <h2 className="font-semibold text-emerald-600 dark:text-emerald-400">Ringkasan Draft</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium">Tim A</p>
              <p className="text-sm text-foreground/70">
                {state.picksA.map((slug) => getHero(slug)?.name).join(", ")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Tim B</p>
              <p className="text-sm text-foreground/70">
                {state.picksB.map((slug) => getHero(slug)?.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
