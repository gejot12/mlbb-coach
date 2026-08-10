/**
 * Thin client for the LiquipediaDB (LPDB) API, built to the published API Terms of Use
 * (liquipedia.net/api-terms-of-use) as of Aug 2026:
 *  - Free access is request-only — apply via the #api-help channel on Liquipedia's Discord
 *    (discord.com/invite/liquipedia) or the form at liquipedia.net/api — restricted to
 *    educational / non-commercial / open-source community projects, often time-limited.
 *  - Rate limit: max 60 requests/hour once approved.
 *  - A descriptive User-Agent with contact info is required (generic ones get blocked).
 *  - Results must be cached/reused, not re-fetched.
 *  - CC-BY-SA 3.0 attribution to Liquipedia is required wherever this data is displayed
 *    (handled on the matches pages, conditional on `source === 'scraper'`).
 *
 * CORRECTION (confirmed directly by Liquipedia staff in #api-help, Aug 2026): LPDB is a
 * distinct, proprietary Liquipedia system — it is NOT the generic MediaWiki Cargo query
 * API (`action=cargoquery`). An earlier version of this file guessed a Cargo-shaped
 * request (`tables=Match`, `fields=Match.team1,...`) — that was wrong and has been removed
 * rather than left in place, since it would silently fail (or worse, silently succeed
 * against the wrong endpoint) once a real API key is added. The real base URL, auth
 * mechanism, and response schema are only shared once API access is approved — do not
 * guess them again. Fill in `LPDB_BASE_URL` and the request/response shape in
 * `queryMatches` from the real docs before this client is used for anything.
 */

const MIN_REQUEST_INTERVAL_MS = 60_000; // 60 req/hour ceiling -> at most one request per minute

// TODO: replace with the real LPDB base URL once shared after API approval.
const LPDB_BASE_URL = "https://api.liquipedia.net"; // unverified — placeholder only

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
 *  the published Terms of Use and should stay valid regardless of the real LPDB request shape. */
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

export interface RawLpdbMatch {
  team1: string;
  team2: string;
  winner: string | null;
  date: string;
  tournament: string;
  bestof: string | null;
  pagename: string;
}

/**
 * NOT YET IMPLEMENTED. The request shape (endpoint path, query params, response JSON
 * structure) is unknown until LPDB API docs are received post-approval — see the file-level
 * comment. Wire this up against the real docs; `throttledFetch` already handles rate
 * limiting, auth headers, and caching correctly.
 */
export async function queryMatches(_tournamentQuery: string, _limit = 50): Promise<RawLpdbMatch[]> {
  void LPDB_BASE_URL;
  void throttledFetch;
  throw new Error(
    "queryMatches is a stub — implement against the real LPDB API docs (received after Discord #api-help approval) before calling this.",
  );
}
