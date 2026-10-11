-- MPL ID/PH Season 18 refresh, 11 Oct 2026: new results since the 29 Sep backfill + two data
-- fixes. Source: mlbbhub.com/mpl/id/schedule and mlbbhub.com/mpl/ph/schedule (as of 11 Oct 2026).
-- Kickoff times are estimated slots (07:00/10:00/13:00 UTC in listed order) — the source only
-- gives dates. In-progress matches on 11 Oct (DEWA vs BTR, Team Falcons PH vs Team Liquid PH)
-- are deliberately left out until they finish.
--
-- ALREADY APPLIED to the live database via the REST API on 2026-10-11 — this file is the record
-- of what was run. Do NOT run it again (it would duplicate the new matches).

-- Fix 1: one early row used "Team Liquid ID" while every other row uses the code "TLID".
update matches set team_a = 'TLID' where team_a = 'Team Liquid ID';
update matches set team_b = 'TLID' where team_b = 'Team Liquid ID';
update matches set winner = 'TLID' where winner = 'Team Liquid ID';

-- Fix 2: MPL PH stage labels. The 29 Sep backfill copied a source table that lumped everything
-- from 11 Sep onward into "Week 7". PH plays one Fri-Sun block per week, 7 matches each.
update matches set stage = 'Week 1'
where league_id = (select id from leagues where slug = 'mpl-ph')
  and scheduled_at >= '2026-08-21T00:00:00Z' and scheduled_at < '2026-08-24T00:00:00Z';
update matches set stage = 'Week 2'
where league_id = (select id from leagues where slug = 'mpl-ph')
  and scheduled_at >= '2026-08-28T00:00:00Z' and scheduled_at < '2026-08-31T00:00:00Z';
update matches set stage = 'Week 3'
where league_id = (select id from leagues where slug = 'mpl-ph')
  and scheduled_at >= '2026-09-04T00:00:00Z' and scheduled_at < '2026-09-07T00:00:00Z';
update matches set stage = 'Week 4'
where league_id = (select id from leagues where slug = 'mpl-ph')
  and scheduled_at >= '2026-09-11T00:00:00Z' and scheduled_at < '2026-09-14T00:00:00Z';
update matches set stage = 'Week 5'
where league_id = (select id from leagues where slug = 'mpl-ph')
  and scheduled_at >= '2026-09-18T00:00:00Z' and scheduled_at < '2026-09-21T00:00:00Z';
update matches set stage = 'Week 6'
where league_id = (select id from leagues where slug = 'mpl-ph')
  and scheduled_at >= '2026-09-25T00:00:00Z' and scheduled_at < '2026-09-28T00:00:00Z';
update matches set stage = 'Week 7'
where league_id = (select id from leagues where slug = 'mpl-ph')
  and scheduled_at >= '2026-10-02T00:00:00Z' and scheduled_at < '2026-10-05T00:00:00Z';
update matches set stage = 'Week 8'
where league_id = (select id from leagues where slug = 'mpl-ph')
  and scheduled_at >= '2026-10-08T00:00:00Z' and scheduled_at < '2026-10-12T00:00:00Z';

-- ============================= MPL Indonesia Season 18 =============================
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, score_a, score_b, winner, best_of, source, source_url)
select id, v.stage, v.scheduled_at, v.team_a, v.team_b, 'completed', v.score_a, v.score_b, v.winner, 3, 'manual', 'https://mlbbhub.com/mpl/id/schedule'
from leagues, (values
  ('Week 7', '2026-10-02T07:00:00Z'::timestamptz, 'GEEK', 'BTR', 1, 2, 'BTR'),
  ('Week 7', '2026-10-02T10:00:00Z'::timestamptz, 'DEWA', 'TLID', 2, 1, 'DEWA'),
  ('Week 7', '2026-10-03T07:00:00Z'::timestamptz, 'AE', 'NAVI', 1, 2, 'NAVI'),
  ('Week 7', '2026-10-03T10:00:00Z'::timestamptz, 'BTR', 'RRQ', 2, 1, 'BTR'),
  ('Week 7', '2026-10-03T13:00:00Z'::timestamptz, 'GEEK', 'DEWA', 2, 1, 'GEEK'),
  ('Week 7', '2026-10-04T07:00:00Z'::timestamptz, 'AE', 'TLID', 0, 2, 'TLID'),
  ('Week 7', '2026-10-04T10:00:00Z'::timestamptz, 'RRQ', 'EVOS', 2, 1, 'RRQ'),
  ('Week 7', '2026-10-04T13:00:00Z'::timestamptz, 'ONIC', 'NAVI', 2, 1, 'ONIC'),
  ('Week 8', '2026-10-08T07:00:00Z'::timestamptz, 'EVOS', 'DEWA', 2, 1, 'EVOS'),
  ('Week 8', '2026-10-08T10:00:00Z'::timestamptz, 'AE', 'BTR', 2, 0, 'AE'),
  ('Week 8', '2026-10-08T13:00:00Z'::timestamptz, 'NAVI', 'TLID', 2, 0, 'NAVI'),
  ('Week 8', '2026-10-09T07:00:00Z'::timestamptz, 'EVOS', 'ONIC', 2, 1, 'EVOS'),
  ('Week 8', '2026-10-09T10:00:00Z'::timestamptz, 'RRQ', 'TLID', 0, 2, 'TLID'),
  ('Week 8', '2026-10-09T13:00:00Z'::timestamptz, 'DEWA', 'NAVI', 0, 2, 'NAVI'),
  ('Week 8', '2026-10-11T07:00:00Z'::timestamptz, 'EVOS', 'GEEK', 0, 2, 'GEEK'),
  ('Week 8', '2026-10-11T10:00:00Z'::timestamptz, 'RRQ', 'ONIC', 1, 2, 'ONIC')
) as v(stage, scheduled_at, team_a, team_b, score_a, score_b, winner)
where leagues.slug = 'mpl-id';

-- ============================= MPL Philippines Season 18 ============================
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, score_a, score_b, winner, best_of, source, source_url)
select id, v.stage, v.scheduled_at, v.team_a, v.team_b, 'completed', v.score_a, v.score_b, v.winner, 3, 'manual', 'https://mlbbhub.com/mpl/ph/schedule'
from leagues, (values
  ('Week 7', '2026-10-02T07:00:00Z'::timestamptz, 'ONIC Philippines', 'Twisted Minds PH', 2, 0, 'ONIC Philippines'),
  ('Week 7', '2026-10-02T10:00:00Z'::timestamptz, 'Aurora Gaming PH', 'TNC Pro Team', 2, 1, 'Aurora Gaming PH'),
  ('Week 7', '2026-10-03T07:00:00Z'::timestamptz, 'Twisted Minds PH', 'Smart Omega', 0, 2, 'Smart Omega'),
  ('Week 7', '2026-10-03T10:00:00Z'::timestamptz, 'AP.Bren', 'Team Falcons PH', 1, 2, 'Team Falcons PH'),
  ('Week 7', '2026-10-03T13:00:00Z'::timestamptz, 'ONIC Philippines', 'Aurora Gaming PH', 1, 2, 'Aurora Gaming PH'),
  ('Week 7', '2026-10-04T07:00:00Z'::timestamptz, 'Team Liquid PH', 'AP.Bren', 2, 0, 'Team Liquid PH'),
  ('Week 7', '2026-10-04T10:00:00Z'::timestamptz, 'Team Falcons PH', 'Smart Omega', 2, 0, 'Team Falcons PH'),
  ('Week 8', '2026-10-08T07:00:00Z'::timestamptz, 'Twisted Minds PH', 'Team Liquid PH', 0, 2, 'Team Liquid PH'),
  ('Week 8', '2026-10-08T10:00:00Z'::timestamptz, 'ONIC Philippines', 'TNC Pro Team', 2, 1, 'ONIC Philippines'),
  ('Week 8', '2026-10-09T07:00:00Z'::timestamptz, 'AP.Bren', 'Smart Omega', 0, 2, 'Smart Omega'),
  ('Week 8', '2026-10-09T10:00:00Z'::timestamptz, 'TNC Pro Team', 'Team Falcons PH', 1, 2, 'Team Falcons PH'),
  ('Week 8', '2026-10-09T13:00:00Z'::timestamptz, 'Team Liquid PH', 'ONIC Philippines', 2, 0, 'Team Liquid PH'),
  ('Week 8', '2026-10-11T07:00:00Z'::timestamptz, 'Aurora Gaming PH', 'Twisted Minds PH', 2, 1, 'Aurora Gaming PH')
) as v(stage, scheduled_at, team_a, team_b, score_a, score_b, winner)
where leagues.slug = 'mpl-ph';
