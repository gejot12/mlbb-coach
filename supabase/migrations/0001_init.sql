-- Phase B: leagues, patch notes, and matches.
-- `source` ('manual' | 'scraper') and `external_id` on matches let manually-seeded rows
-- and future Liquipedia-synced rows share one schema with no migration needed later.

create extension if not exists "pgcrypto";

create table leagues (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  region text,
  created_at timestamptz not null default now()
);

create table patch_notes (
  id uuid primary key default gen_random_uuid(),
  version text not null unique,
  release_date date not null,
  title text,
  summary text,
  source_url text,
  source text not null default 'manual' check (source in ('manual', 'scraper')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table patch_note_changes (
  id uuid primary key default gen_random_uuid(),
  patch_note_id uuid not null references patch_notes(id) on delete cascade,
  change_type text not null check (
    change_type in ('hero_buff', 'hero_nerf', 'hero_adjust', 'item_change', 'system_change')
  ),
  subject_name text not null,
  subject_slug text,
  description text not null,
  sort_order int not null default 0
);
create index patch_note_changes_patch_note_id_idx on patch_note_changes (patch_note_id);

create table matches (
  id uuid primary key default gen_random_uuid(),
  league_id uuid not null references leagues(id),
  stage text,
  scheduled_at timestamptz not null,
  team_a text not null,
  team_b text not null,
  status text not null default 'scheduled' check (
    status in ('scheduled', 'live', 'completed', 'postponed', 'cancelled')
  ),
  score_a int,
  score_b int,
  winner text,
  best_of int default 3,
  source_url text,
  source text not null default 'manual' check (source in ('manual', 'scraper')),
  external_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index matches_league_scheduled_idx on matches (league_id, scheduled_at);
create unique index matches_external_id_idx on matches (external_id) where external_id is not null;

-- Row Level Security: public read-only. All writes (manual seed and the future Liquipedia
-- sync job) go through the server-side Supabase client using the service role key, which
-- bypasses RLS — so no INSERT/UPDATE policy is defined for the anon/public role here.
alter table leagues enable row level security;
alter table patch_notes enable row level security;
alter table patch_note_changes enable row level security;
alter table matches enable row level security;

create policy "public read leagues" on leagues for select using (true);
create policy "public read patch_notes" on patch_notes for select using (true);
create policy "public read patch_note_changes" on patch_note_changes for select using (true);
create policy "public read matches" on matches for select using (true);
