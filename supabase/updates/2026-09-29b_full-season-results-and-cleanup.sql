-- Full-season backfill for MPL Indonesia & Philippines Season 18, replacing the stale
-- "Week 1 scheduled" placeholders from the original seed (those dates are weeks in the
-- past now and never got real results filled in — some even used inconsistent team-name
-- codes, e.g. PH used "FLCN"/"RORA" while later inserts used "Team Falcons PH"/"Aurora
-- Gaming PH"). Source: mlbbhub.com/mpl/id/schedule and mlbbhub.com/mpl/ph/schedule (single
-- source, but internally consistent and cross-checked against gosugamers.net's dedicated
-- match page for EVOS vs Team Liquid ID, which matched exactly). Checked 2026-09-29.
--
-- Team names are normalized to match what's already live on the site (e.g. "ONIC
-- Philippines", "Team Falcons PH", "Aurora Gaming PH", "AP.Bren") so the same team doesn't
-- show up under two different labels across matches.
--
-- Excludes 3 matches already inserted in 2026-09-29_patch-2216-and-recent-mpl.sql:
-- EVOS vs Team Liquid ID (20 Sep), Team Falcons PH vs ONIC Philippines (26 Sep), and
-- Aurora Gaming PH vs Team Falcons PH (27 Sep) — do not re-run that file after this one.

-- Remove the stale, never-resolved "Week 1" placeholders for ID and PH (MY is left alone —
-- no real result data was researched for it, so it stays as-is rather than being deleted
-- with nothing to replace it).
delete from matches
where status = 'scheduled'
  and stage = 'Week 1'
  and league_id in (select id from leagues where slug in ('mpl-id', 'mpl-ph'));

-- ============================= MPL Indonesia Season 18 =============================
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, score_a, score_b, winner, best_of, source, source_url)
select id, v.stage, v.scheduled_at, v.team_a, v.team_b, 'completed', v.score_a, v.score_b, v.winner, 3, 'manual', 'https://mlbbhub.com/mpl/id/schedule'
from leagues, (values
  -- Week 1
  ('Week 1', '2026-08-14T07:00:00Z'::timestamptz, 'EVOS', 'RRQ', 2, 0, 'EVOS'),
  ('Week 1', '2026-08-14T10:00:00Z'::timestamptz, 'NAVI', 'AE', 0, 2, 'AE'),
  ('Week 1', '2026-08-15T07:00:00Z'::timestamptz, 'TLID', 'GEEK', 2, 1, 'TLID'),
  ('Week 1', '2026-08-15T10:00:00Z'::timestamptz, 'DEWA', 'RRQ', 1, 2, 'RRQ'),
  ('Week 1', '2026-08-15T13:00:00Z'::timestamptz, 'EVOS', 'NAVI', 1, 2, 'NAVI'),
  ('Week 1', '2026-08-16T07:00:00Z'::timestamptz, 'TLID', 'DEWA', 2, 0, 'TLID'),
  ('Week 1', '2026-08-16T10:00:00Z'::timestamptz, 'BTR', 'GEEK', 2, 1, 'BTR'),
  ('Week 1', '2026-08-16T13:00:00Z'::timestamptz, 'AE', 'ONIC', 0, 2, 'ONIC'),
  -- Week 2
  ('Week 2', '2026-08-21T07:00:00Z'::timestamptz, 'TLID', 'NAVI', 0, 2, 'NAVI'),
  ('Week 2', '2026-08-21T10:00:00Z'::timestamptz, 'BTR', 'DEWA', 2, 0, 'BTR'),
  ('Week 2', '2026-08-22T07:00:00Z'::timestamptz, 'TLID', 'EVOS', 2, 0, 'TLID'),
  ('Week 2', '2026-08-22T10:00:00Z'::timestamptz, 'NAVI', 'GEEK', 2, 1, 'NAVI'),
  ('Week 2', '2026-08-22T13:00:00Z'::timestamptz, 'ONIC', 'RRQ', 2, 0, 'ONIC'),
  ('Week 2', '2026-08-23T07:00:00Z'::timestamptz, 'DEWA', 'AE', 0, 2, 'AE'),
  ('Week 2', '2026-08-23T10:00:00Z'::timestamptz, 'ONIC', 'BTR', 1, 2, 'BTR'),
  ('Week 2', '2026-08-23T13:00:00Z'::timestamptz, 'GEEK', 'EVOS', 0, 2, 'EVOS'),
  -- Week 3
  ('Week 3', '2026-08-28T07:00:00Z'::timestamptz, 'BTR', 'NAVI', 2, 0, 'BTR'),
  ('Week 3', '2026-08-28T10:00:00Z'::timestamptz, 'DEWA', 'GEEK', 2, 0, 'DEWA'),
  ('Week 3', '2026-08-29T07:00:00Z'::timestamptz, 'TLID', 'ONIC', 2, 1, 'TLID'),
  ('Week 3', '2026-08-29T10:00:00Z'::timestamptz, 'AE', 'EVOS', 2, 0, 'AE'),
  ('Week 3', '2026-08-29T13:00:00Z'::timestamptz, 'RRQ', 'BTR', 1, 2, 'BTR'),
  ('Week 3', '2026-08-30T07:00:00Z'::timestamptz, 'NAVI', 'ONIC', 2, 0, 'NAVI'),
  ('Week 3', '2026-08-30T10:00:00Z'::timestamptz, 'GEEK', 'RRQ', 0, 2, 'RRQ'),
  ('Week 3', '2026-08-30T13:00:00Z'::timestamptz, 'TLID', 'AE', 2, 1, 'TLID'),
  -- Week 4
  ('Week 4', '2026-09-04T07:00:00Z'::timestamptz, 'NAVI', 'DEWA', 2, 0, 'NAVI'),
  ('Week 4', '2026-09-04T10:00:00Z'::timestamptz, 'TLID', 'RRQ', 2, 0, 'TLID'),
  ('Week 4', '2026-09-05T07:00:00Z'::timestamptz, 'DEWA', 'ONIC', 2, 1, 'DEWA'),
  ('Week 4', '2026-09-05T10:00:00Z'::timestamptz, 'EVOS', 'BTR', 2, 1, 'EVOS'),
  ('Week 4', '2026-09-05T13:00:00Z'::timestamptz, 'AE', 'GEEK', 2, 0, 'AE'),
  ('Week 4', '2026-09-06T07:00:00Z'::timestamptz, 'RRQ', 'NAVI', 0, 2, 'NAVI'),
  ('Week 4', '2026-09-06T10:00:00Z'::timestamptz, 'ONIC', 'EVOS', 2, 0, 'ONIC'),
  ('Week 4', '2026-09-06T13:00:00Z'::timestamptz, 'BTR', 'AE', 0, 2, 'AE'),
  -- Week 5
  ('Week 5', '2026-09-11T07:00:00Z'::timestamptz, 'GEEK', 'ONIC', 2, 1, 'GEEK'),
  ('Week 5', '2026-09-12T07:00:00Z'::timestamptz, 'TLID', 'BTR', 2, 0, 'TLID'),
  ('Week 5', '2026-09-12T10:00:00Z'::timestamptz, 'AE', 'RRQ', 2, 0, 'AE'),
  ('Week 5', '2026-09-12T13:00:00Z'::timestamptz, 'NAVI', 'EVOS', 2, 0, 'NAVI'),
  ('Week 5', '2026-09-13T07:00:00Z'::timestamptz, 'GEEK', 'TLID', 0, 2, 'TLID'),
  ('Week 5', '2026-09-13T10:00:00Z'::timestamptz, 'ONIC', 'AE', 0, 2, 'AE'),
  -- Week 6 (EVOS vs TLID on Sep 20 already inserted separately)
  ('Week 6', '2026-09-18T07:00:00Z'::timestamptz, 'ONIC', 'GEEK', 0, 2, 'GEEK'),
  ('Week 6', '2026-09-18T10:00:00Z'::timestamptz, 'DEWA', 'EVOS', 0, 2, 'EVOS'),
  ('Week 6', '2026-09-18T13:00:00Z'::timestamptz, 'RRQ', 'DEWA', 1, 2, 'DEWA'),
  ('Week 6', '2026-09-19T07:00:00Z'::timestamptz, 'GEEK', 'NAVI', 0, 2, 'NAVI'),
  ('Week 6', '2026-09-19T10:00:00Z'::timestamptz, 'RRQ', 'AE', 1, 2, 'AE'),
  ('Week 6', '2026-09-19T13:00:00Z'::timestamptz, 'BTR', 'TLID', 0, 2, 'TLID'),
  ('Week 6', '2026-09-20T07:00:00Z'::timestamptz, 'AE', 'DEWA', 0, 2, 'DEWA'),
  ('Week 6', '2026-09-20T10:00:00Z'::timestamptz, 'BTR', 'ONIC', 0, 2, 'ONIC')
) as v(stage, scheduled_at, team_a, team_b, score_a, score_b, winner)
where leagues.slug = 'mpl-id';

-- ============================= MPL Philippines Season 18 ============================
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, score_a, score_b, winner, best_of, source, source_url)
select id, v.stage, v.scheduled_at, v.team_a, v.team_b, 'completed', v.score_a, v.score_b, v.winner, 3, 'manual', 'https://mlbbhub.com/mpl/ph/schedule'
from leagues, (values
  -- Week 1
  ('Week 1', '2026-08-21T07:00:00Z'::timestamptz, 'Aurora Gaming PH', 'ONIC Philippines', 0, 2, 'ONIC Philippines'),
  ('Week 1', '2026-08-21T10:00:00Z'::timestamptz, 'Team Liquid PH', 'Team Falcons PH', 1, 2, 'Team Falcons PH'),
  ('Week 1', '2026-08-22T07:00:00Z'::timestamptz, 'AP.Bren', 'Twisted Minds PH', 2, 1, 'AP.Bren'),
  ('Week 1', '2026-08-22T10:00:00Z'::timestamptz, 'Smart Omega', 'Team Liquid PH', 0, 2, 'Team Liquid PH'),
  ('Week 1', '2026-08-22T13:00:00Z'::timestamptz, 'Team Falcons PH', 'TNC Pro Team', 2, 0, 'Team Falcons PH'),
  -- Week 2
  ('Week 2', '2026-08-23T07:00:00Z'::timestamptz, 'ONIC Philippines', 'AP.Bren', 2, 0, 'ONIC Philippines'),
  ('Week 2', '2026-08-23T10:00:00Z'::timestamptz, 'TNC Pro Team', 'Aurora Gaming PH', 2, 1, 'TNC Pro Team'),
  -- Week 3
  ('Week 3', '2026-08-28T07:00:00Z'::timestamptz, 'AP.Bren', 'Team Liquid PH', 0, 2, 'Team Liquid PH'),
  ('Week 3', '2026-08-28T10:00:00Z'::timestamptz, 'Twisted Minds PH', 'ONIC Philippines', 0, 2, 'ONIC Philippines'),
  ('Week 3', '2026-08-29T07:00:00Z'::timestamptz, 'AP.Bren', 'TNC Pro Team', 1, 2, 'TNC Pro Team'),
  ('Week 3', '2026-08-29T10:00:00Z'::timestamptz, 'Smart Omega', 'Team Falcons PH', 2, 1, 'Smart Omega'),
  ('Week 3', '2026-08-29T13:00:00Z'::timestamptz, 'Team Liquid PH', 'Aurora Gaming PH', 2, 0, 'Team Liquid PH'),
  -- Week 4
  ('Week 4', '2026-08-30T07:00:00Z'::timestamptz, 'Twisted Minds PH', 'Team Falcons PH', 0, 2, 'Team Falcons PH'),
  ('Week 4', '2026-08-30T10:00:00Z'::timestamptz, 'ONIC Philippines', 'Smart Omega', 2, 1, 'ONIC Philippines'),
  -- Week 5
  ('Week 5', '2026-09-04T07:00:00Z'::timestamptz, 'Twisted Minds PH', 'Aurora Gaming PH', 0, 2, 'Aurora Gaming PH'),
  ('Week 5', '2026-09-04T10:00:00Z'::timestamptz, 'TNC Pro Team', 'ONIC Philippines', 1, 2, 'ONIC Philippines'),
  ('Week 5', '2026-09-05T07:00:00Z'::timestamptz, 'Smart Omega', 'AP.Bren', 2, 1, 'Smart Omega'),
  ('Week 5', '2026-09-05T10:00:00Z'::timestamptz, 'TNC Pro Team', 'Team Liquid PH', 0, 2, 'Team Liquid PH'),
  ('Week 5', '2026-09-05T13:00:00Z'::timestamptz, 'ONIC Philippines', 'Team Falcons PH', 1, 2, 'Team Falcons PH'),
  -- Week 6
  ('Week 6', '2026-09-06T07:00:00Z'::timestamptz, 'Team Liquid PH', 'Twisted Minds PH', 2, 0, 'Team Liquid PH'),
  ('Week 6', '2026-09-06T10:00:00Z'::timestamptz, 'Aurora Gaming PH', 'Smart Omega', 2, 0, 'Aurora Gaming PH'),
  -- Week 7
  ('Week 7', '2026-09-11T07:00:00Z'::timestamptz, 'Smart Omega', 'Twisted Minds PH', 2, 1, 'Smart Omega'),
  ('Week 7', '2026-09-11T10:00:00Z'::timestamptz, 'Aurora Gaming PH', 'AP.Bren', 2, 0, 'Aurora Gaming PH'),
  ('Week 7', '2026-09-12T07:00:00Z'::timestamptz, 'Twisted Minds PH', 'TNC Pro Team', 0, 2, 'TNC Pro Team'),
  ('Week 7', '2026-09-12T10:00:00Z'::timestamptz, 'Team Falcons PH', 'AP.Bren', 2, 0, 'Team Falcons PH'),
  ('Week 7', '2026-09-12T13:00:00Z'::timestamptz, 'ONIC Philippines', 'Team Liquid PH', 0, 2, 'Team Liquid PH'),
  ('Week 7', '2026-09-13T07:00:00Z'::timestamptz, 'TNC Pro Team', 'Smart Omega', 1, 2, 'Smart Omega'),
  ('Week 7', '2026-09-13T10:00:00Z'::timestamptz, 'Team Falcons PH', 'Aurora Gaming PH', 2, 1, 'Team Falcons PH'),
  ('Week 7', '2026-09-18T07:00:00Z'::timestamptz, 'Team Liquid PH', 'TNC Pro Team', 2, 1, 'Team Liquid PH'),
  ('Week 7', '2026-09-18T10:00:00Z'::timestamptz, 'Smart Omega', 'Aurora Gaming PH', 0, 2, 'Aurora Gaming PH'),
  ('Week 7', '2026-09-19T07:00:00Z'::timestamptz, 'TNC Pro Team', 'AP.Bren', 0, 2, 'AP.Bren'),
  ('Week 7', '2026-09-19T10:00:00Z'::timestamptz, 'Team Falcons PH', 'Twisted Minds PH', 2, 0, 'Team Falcons PH'),
  ('Week 7', '2026-09-19T13:00:00Z'::timestamptz, 'Aurora Gaming PH', 'Team Liquid PH', 2, 0, 'Aurora Gaming PH'),
  ('Week 7', '2026-09-20T07:00:00Z'::timestamptz, 'AP.Bren', 'ONIC Philippines', 1, 2, 'ONIC Philippines'),
  ('Week 7', '2026-09-20T10:00:00Z'::timestamptz, 'Team Liquid PH', 'Smart Omega', 2, 0, 'Team Liquid PH'),
  ('Week 7', '2026-09-25T07:00:00Z'::timestamptz, 'Twisted Minds PH', 'AP.Bren', 0, 2, 'AP.Bren'),
  ('Week 7', '2026-09-25T10:00:00Z'::timestamptz, 'Smart Omega', 'ONIC Philippines', 0, 2, 'ONIC Philippines'),
  ('Week 7', '2026-09-26T07:00:00Z'::timestamptz, 'TNC Pro Team', 'Twisted Minds PH', 2, 0, 'TNC Pro Team'),
  ('Week 7', '2026-09-26T10:00:00Z'::timestamptz, 'AP.Bren', 'Aurora Gaming PH', 0, 2, 'Aurora Gaming PH'),
  ('Week 7', '2026-09-27T07:00:00Z'::timestamptz, 'Smart Omega', 'TNC Pro Team', 2, 0, 'Smart Omega')
) as v(stage, scheduled_at, team_a, team_b, score_a, score_b, winner)
where leagues.slug = 'mpl-ph';
