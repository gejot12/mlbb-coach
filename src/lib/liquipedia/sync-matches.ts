import { queryMatches, type RawLpdbMatch } from "./client";
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

function toExternalId(match: RawLpdbMatch): string {
  return `${match.pagename}::${match.team1}::${match.team2}::${match.date}`;
}

function mapStatus(match: RawLpdbMatch): "scheduled" | "completed" {
  return match.winner ? "completed" : "scheduled";
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

  // `queryMatches` is currently a stub (throws) — see client.ts. Once the real LPDB
  // request shape is known, this call's argument(s) will need to match that shape;
  // `tournamentPage` is kept here as the thing being queried for, not literal query syntax.
  const rawMatches = await queryMatches(tournamentPage);

  const rows = rawMatches.map((m) => ({
    league_id: league.id,
    stage: m.tournament,
    scheduled_at: m.date,
    team_a: m.team1,
    team_b: m.team2,
    status: mapStatus(m),
    winner: m.winner,
    best_of: m.bestof ? Number(m.bestof) : null,
    source: "scraper" as const,
    source_url: `https://liquipedia.net/mobilelegends/${m.pagename}`,
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
