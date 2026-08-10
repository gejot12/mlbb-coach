/**
 * Thin client for the LiquipediaDB (Cargo) API, built to the published API Terms of Use
 * (liquipedia.net/api-terms-of-use) as of Aug 2026:
 *  - Free access is request-only (via Liquipedia's contact form, not self-service) and is
 *    restricted to educational / non-commercial / open-source community projects, often
 *    time-limited. Apply BEFORE relying on this client — see project README.
 *  - Rate limit: max 60 requests/hour once approved.
 *  - A descriptive User-Agent with contact info is required (generic ones get blocked).
 *  - Results must be cached/reused, not re-fetched.
 *  - CC-BY-SA 3.0 attribution to Liquipedia is required wherever this data is displayed
 *    (handled on the matches pages, conditional on `source === 'scraper'`).
 *
 * The exact Cargo table/field names for match data (e.g. table "Match", fields like
 * team1/team2/date/winner) could NOT be verified while writing this client — Liquipedia's
 * docs pages returned 403 to automated fetches (consistent with them blocking non-API
 * scraping). CARGO_MATCH_FIELDS below is a best-effort placeholder based on Cargo/LPDB
 * conventions documented elsewhere; confirm the real field names against the docs exposed
 * in the LiquipediaDB Dashboard once API access is approved, and adjust `queryMatches`.
 */

const LIQUIPEDIA_WIKI = "mobilelegends";
const LIQUIPEDIA_API_BASE = `https://liquipedia.net/${LIQUIPEDIA_WIKI}/api.php`;
const MIN_REQUEST_INTERVAL_MS = 60_000; // 60 req/hour ceiling -> at most one request per minute

// Best-effort placeholder — confirm against real LiquipediaDB docs before relying on this.
const CARGO_MATCH_FIELDS = [
  "Match.team1",
  "Match.team2",
  "Match.winner",
  "Match.date",
  "Match.tournament",
  "Match.bestof",
  "Match.pagename",
] as const;

let lastRequestAt = 0;

function getUserAgent(): string {
  const ua = process.env.LIQUIPEDIA_USER_AGENT;
  if (!ua) {
    throw new Error(
      "LIQUIPEDIA_USER_AGENT belum diisi di .env.local — Liquipedia memblokir User-Agent generik.",
    );
  }
  return ua;
}

function getApiKey(): string {
  const key = process.env.LIQUIPEDIA_API_KEY;
  if (!key) {
    throw new Error("LIQUIPEDIA_API_KEY belum diisi — apply akses dulu via LiquipediaDB Dashboard.");
  }
  return key;
}

async function throttledFetch(url: URL): Promise<Response> {
  const elapsed = Date.now() - lastRequestAt;
  if (elapsed < MIN_REQUEST_INTERVAL_MS) {
    await new Promise((resolve) => setTimeout(resolve, MIN_REQUEST_INTERVAL_MS - elapsed));
  }
  lastRequestAt = Date.now();

  const response = await fetch(url, {
    headers: {
      "User-Agent": getUserAgent(),
      "Authorization": `Bearer ${getApiKey()}`,
      "Accept-Encoding": "gzip",
    },
    // Cache aggressively per the terms ("re-use / cache results for as long as possible").
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Liquipedia API error ${response.status}: ${await response.text()}`);
  }
  return response;
}

export interface RawCargoMatch {
  team1: string;
  team2: string;
  winner: string | null;
  date: string;
  tournament: string;
  bestof: string | null;
  pagename: string;
}

/**
 * Queries the Cargo "Match" table for a given tournament page prefix (e.g.
 * "MPL/Indonesia/Season_18" or "MSC/2026"). `where` uses Cargo query syntax.
 */
export async function queryMatches(where: string, limit = 50): Promise<RawCargoMatch[]> {
  const url = new URL(LIQUIPEDIA_API_BASE);
  url.searchParams.set("action", "cargoquery");
  url.searchParams.set("format", "json");
  url.searchParams.set("tables", "Match");
  url.searchParams.set("fields", CARGO_MATCH_FIELDS.join(","));
  url.searchParams.set("where", where);
  url.searchParams.set("limit", String(limit));

  const response = await throttledFetch(url);
  const json = (await response.json()) as { cargoquery?: { title: Record<string, string> }[] };

  return (json.cargoquery ?? []).map((row) => ({
    team1: row.title["Match.team1"] ?? "",
    team2: row.title["Match.team2"] ?? "",
    winner: row.title["Match.winner"] || null,
    date: row.title["Match.date"] ?? "",
    tournament: row.title["Match.tournament"] ?? "",
    bestof: row.title["Match.bestof"] || null,
    pagename: row.title["Match.pagename"] ?? "",
  }));
}
