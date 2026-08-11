import { queryMatches, type LpdbMatch } from "./client";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

// Liquipedia page prefixes per league — confirm these against the real page names once
// API docs/access are available (these are inferred from the public liquipedia.net URLs
// found while researching the format, e.g. liquipedia.net/mobilelegends/MPL/Indonesia/Season_18).
const LEAGUE_TOURNAMENT_PAGES: Record<string, string> = {
  "mpl-id": "MPL/Indonesia/Season 18",
  "mpl-ph": "MPL/Philippines/Season 18",
  "mpl-my": "MPL/Malaysia/Season 18",
  "m-series": "MSC/2026",
};

function teamName(match: LpdbMatch, index: 0 | 1): string {
  return match.match2opponents[index]?.name ?? "TBD";
}

function teamScore(match: LpdbMatch, index: 0 | 1): number | null {
  const score = match.match2opponents[index]?.score;
  return typeof score === "number" ? score : null;
}

function winnerName(match: LpdbMatch): string | null {
  if (match.winner === "1") return teamName(match, 0);
  if (match.winner === "2") return teamName(match, 1);
  return null;
}

function mapStatus(match: LpdbMatch): "scheduled" | "completed" {
  return match.finished === 1 ? "completed" : "scheduled";
}

/** Liquipedia dates come as "YYYY-MM-DD HH:MM:SS" with no confirmed timezone — treated as
 *  UTC until verified against real docs/data. */
function toIsoTimestamp(date: string): string {
  return `${date.replace(" ", "T")}Z`;
}

/** No unique match ID field was visible in the example response — this composite key is a
 *  best-effort external_id. Prefer a real ID field (e.g. match2id) if the full schema has
 *  one, since a composite key can collide if two matches share tournament+date+teams. */
function toExternalId(match: LpdbMatch): string {
  return `${match.tournament}::${teamName(match, 0)}::${teamName(match, 1)}::${match.date}`;
}

export interface SyncResult {
  league: string;
  fetched: number;
  upserted: number;
  error?: string;
}

/** Syncs one league's matches from Liquipedia into the `matches` table, keyed by external_id. */
export async function syncLeagueMatches(leagueSlug: string): Promise<SyncResult> {
  const tournamentPage = LEAGUE_TOURNAMENT_PAGES[leagueSlug];
  if (!tournamentPage) {
    return { league: leagueSlug, fetched: 0, upserted: 0, error: "Unknown league slug" };
  }

  const supabase = createSupabaseServiceClient();
  const { data: league, error: leagueError } = await supabase
    .from("leagues")
    .select("id")
    .eq("slug", leagueSlug)
    .maybeSingle();
  if (leagueError || !league) {
    return { league: leagueSlug, fetched: 0, upserted: 0, error: leagueError?.message ?? "League not found" };
  }

  const rawMatches = await queryMatches(tournamentPage);

  const rows = rawMatches.map((m) => ({
    league_id: league.id,
    stage: m.match2bracketdata?.header || m.tournament,
    scheduled_at: toIsoTimestamp(m.date),
    team_a: teamName(m, 0),
    team_b: teamName(m, 1),
    status: mapStatus(m),
    score_a: teamScore(m, 0),
    score_b: teamScore(m, 1),
    winner: winnerName(m),
    best_of: m.bestof ?? null,
    source: "scraper" as const,
    source_url: null as string | null,
    external_id: toExternalId(m),
  }));

  if (rows.length === 0) {
    return { league: leagueSlug, fetched: 0, upserted: 0 };
  }

  const { error: upsertError } = await supabase.from("matches").upsert(rows, { onConflict: "external_id" });
  if (upsertError) {
    return { league: leagueSlug, fetched: rows.length, upserted: 0, error: upsertError.message };
  }

  return { league: leagueSlug, fetched: rows.length, upserted: rows.length };
}

export async function syncAllLeagues(): Promise<SyncResult[]> {
  const results: SyncResult[] = [];
  for (const leagueSlug of Object.keys(LEAGUE_TOURNAMENT_PAGES)) {
    // Sequential, not Promise.all — the client already throttles to ~60/hour but running
    // leagues one at a time keeps total wall-clock request pacing predictable.
    results.push(await syncLeagueMatches(leagueSlug));
  }
  return results;
}
