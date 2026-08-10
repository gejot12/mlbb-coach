export type MatchStatus = 'scheduled' | 'live' | 'completed' | 'postponed' | 'cancelled';

export interface League {
  id: string;
  slug: string;
  name: string;
  region: string | null;
}

export interface Match {
  id: string;
  league_id: string;
  stage: string | null;
  scheduled_at: string;
  team_a: string;
  team_b: string;
  status: MatchStatus;
  score_a: number | null;
  score_b: number | null;
  winner: string | null;
  best_of: number | null;
  source_url: string | null;
  source: 'manual' | 'scraper';
  external_id: string | null;
}

export interface MatchWithLeague extends Match {
  leagues: League;
}
