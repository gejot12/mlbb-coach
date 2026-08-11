/**
 * Thin client for the LiquipediaDB (LPDB) API, built to the published API Terms of Use
 * (liquipedia.net/api-terms-of-use) as of Aug 2026:
 *  - Free access is request-only via the form at liquipedia.net/api (or #api-help on
 *    Liquipedia's Discord) — restricted to educational / non-commercial / open-source
 *    community projects, often time-limited.
 *  - Rate limit: max 60 requests/hour once approved.
 *  - A descriptive User-Agent with contact info is required (generic ones get blocked).
 *  - Results must be cached/reused, not re-fetched.
 *  - CC-BY-SA 3.0 attribution to Liquipedia is required wherever this data is displayed
 *    (handled on the matches pages, conditional on `source === 'scraper'`).
 *
 * CORRECTION (confirmed by Liquipedia staff): LPDB is a modern REST API (OpenAPI 3), NOT
 * the MediaWiki Cargo query API — an earlier version of this file wrongly guessed a Cargo
 * shape (`action=cargoquery`) and was rewritten from scratch rather than patched.
 *
 * The `LpdbMatch` response shape below IS confirmed — it's taken directly from a real
 * example in the liquipedia.net/api docs (shown for the `valorant` wiki; the shape is the
 * same for `mobilelegends`, only field values differ). What's still UNCONFIRMED is the
 * request side: the exact endpoint path and query-parameter syntax for filtering by wiki /
 * tournament / date range weren't visible in what was shared. `LPDB_BASE_URL` and the
 * request-building in `queryMatches` are placeholders — fill them in from the real docs
 * (or an example request/cURL snippet) once available, rather than guessing further.
 */

const MIN_REQUEST_INTERVAL_MS = 60_000; // 60 req/hour ceiling -> at most one request per minute

// TODO: confirm the real request path/params — this is an unverified placeholder.
const LPDB_BASE_URL = "https://api.liquipedia.net/api/v3";

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
    throw new Error("LIQUIPEDIA_API_KEY belum diisi — apply akses dulu (lihat komentar di atas).");
  }
  return key;
}

/** Rate-limited, correctly-authenticated fetch wrapper — this plumbing is verified against
 *  the published Terms of Use and should stay valid regardless of the exact request shape. */
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

/** Confirmed shape — from a real liquipedia.net/api "Matches" example response. */
export interface LpdbMatchOpponent {
  type: string;
  name: string;
  score: number;
  match2players?: unknown[];
}

export interface LpdbMatchGame {
  map?: string;
  scores?: number[];
  winner?: string;
  date?: string;
  length?: string;
  vod?: string;
}

export interface LpdbMatch {
  tournament: string;
  liquipediatier?: string;
  liquipediatiertype?: string;
  bestof?: number;
  /** "1" or "2" (1-indexed into match2opponents), or "" if undecided. */
  winner?: string;
  /** 0 or 1 — whether the match has been played out. */
  finished: number;
  /** "YYYY-MM-DD HH:MM:SS" — timezone not confirmed, treat as UTC until verified. */
  date: string;
  stream?: Record<string, string>;
  match2bracketdata?: { type: string; header: string };
  match2opponents: LpdbMatchOpponent[];
  match2games?: LpdbMatchGame[];
  wiki: string;
}

/**
 * Fetches matches for a tournament from the `mobilelegends` wiki. The endpoint path and
 * query-parameter names below are NOT yet confirmed — see the file-level comment. Update
 * the URL construction once the real request format is available; the response parsing
 * (`LpdbMatch`) can stay as-is since that part is already verified.
 */
export async function queryMatches(tournamentQuery: string, limit = 50): Promise<LpdbMatch[]> {
  const url = new URL(`${LPDB_BASE_URL}/matches`);
  url.searchParams.set("wiki", "mobilelegends");
  url.searchParams.set("tournament", tournamentQuery);
  url.searchParams.set("limit", String(limit));

  const response = await throttledFetch(url);
  const json = (await response.json()) as { result?: LpdbMatch[] } | LpdbMatch[];
  return Array.isArray(json) ? json : (json.result ?? []);
}
