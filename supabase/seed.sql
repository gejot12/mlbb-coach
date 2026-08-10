-- Phase B bridge data: real leagues/patch/match info entered manually so the pages
-- aren't empty before the Liquipedia sync job (Phase B, later step) comes online.
-- Sources: id-mpl.com/schedule, my.mpl.mobilelegends.com/schedule, MPL PH Season 18
-- announcement coverage, and MSC 2026 (Esports World Cup) result coverage — checked Aug 2026.

insert into leagues (slug, name, region) values
  ('mpl-id', 'MPL Indonesia', 'Indonesia'),
  ('mpl-ph', 'MPL Philippines', 'Philippines'),
  ('mpl-my', 'MPL Malaysia', 'Malaysia'),
  ('m-series', 'M Series (MSC / M World Championship)', 'International');

insert into patch_notes (version, release_date, title, summary, source) values
  (
    '2.1.90',
    '2026-07-08',
    'Patch 2.1.90 — Jungle Tank Rebalance',
    'Setelah perubahan jungle season baru membuat tank jungler overtuned, patch ini memangkas kecepatan jungling dan damage Baxia, Fredrinn, dan Akai, sambil menaikkan exp lane/jungle pick yang jarang dipakai seperti Esmeralda, Nolan, Aulus, Minsitthar, dan Argus. Zhuxin juga kehilangan sedikit jarak cast Skill 2, ditambah early-game jungle gold dinaikkan, buff Mythical Honor untuk Melissa, dan fix cooldown Skill 1 Atlas.',
    'manual'
  );

insert into patch_note_changes (patch_note_id, change_type, subject_name, subject_slug, description, sort_order)
select id, 'hero_nerf', 'Baxia', 'baxia', 'Kecepatan jungling dan damage clear dikurangi.', 1 from patch_notes where version = '2.1.90'
union all
select id, 'hero_nerf', 'Fredrinn', 'fredrinn', 'Kecepatan jungling dan damage clear dikurangi.', 2 from patch_notes where version = '2.1.90'
union all
select id, 'hero_nerf', 'Akai', 'akai', 'Kecepatan jungling dan damage clear dikurangi.', 3 from patch_notes where version = '2.1.90'
union all
select id, 'hero_buff', 'Esmeralda', 'esmeralda', 'Buff untuk menaikkan viability exp lane/jungle.', 4 from patch_notes where version = '2.1.90'
union all
select id, 'hero_buff', 'Nolan', 'nolan', 'Buff untuk menaikkan viability jungle.', 5 from patch_notes where version = '2.1.90'
union all
select id, 'hero_buff', 'Aulus', 'aulus', 'Buff untuk menaikkan viability exp lane.', 6 from patch_notes where version = '2.1.90'
union all
select id, 'hero_buff', 'Minsitthar', 'minsitthar', 'Buff untuk menaikkan viability jungle/roam.', 7 from patch_notes where version = '2.1.90'
union all
select id, 'hero_buff', 'Argus', 'argus', 'Buff untuk menaikkan viability jungle/exp lane.', 8 from patch_notes where version = '2.1.90'
union all
select id, 'hero_adjust', 'Zhuxin', 'zhuxin', 'Jarak cast Skill 2 dikurangi.', 9 from patch_notes where version = '2.1.90'
union all
select id, 'hero_buff', 'Melissa', 'melissa', 'Buff Mythical Honor.', 10 from patch_notes where version = '2.1.90'
union all
select id, 'system_change', 'Atlas', 'atlas', 'Fix cooldown Skill 1 yang tidak sesuai deskripsi.', 11 from patch_notes where version = '2.1.90'
union all
select id, 'system_change', 'Jungle Gold', null, 'Gold pasif early-game dari jungle dinaikkan.', 12 from patch_notes where version = '2.1.90';

-- MSC 2026 (Esports World Cup, Paris) — completed, most recent international event.
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, score_a, score_b, winner, best_of, source)
select id, 'Grand Final', '2026-08-01T18:00:00Z', 'Team Spirit', 'Yangon Galacticos', 'completed', 4, 3, 'Team Spirit', 7, 'manual'
from leagues where slug = 'm-series';

-- MPL Indonesia Season 18 — Week 1 (scheduled, season starts Aug 14 2026, after "today").
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, best_of, source)
select id, 'Week 1', v.scheduled_at, v.team_a, v.team_b, 'scheduled', 3, 'manual'
from leagues, (values
  ('2026-08-14T08:00:00Z'::timestamptz, 'EVOS', 'RRQ'),
  ('2026-08-14T11:00:00Z'::timestamptz, 'NAVI', 'AE'),
  ('2026-08-15T07:00:00Z'::timestamptz, 'TLID', 'GEEK'),
  ('2026-08-15T10:00:00Z'::timestamptz, 'DEWA', 'RRQ'),
  ('2026-08-15T13:00:00Z'::timestamptz, 'EVOS', 'NAVI'),
  ('2026-08-16T07:00:00Z'::timestamptz, 'TLID', 'DEWA'),
  ('2026-08-16T10:00:00Z'::timestamptz, 'BTR', 'GEEK'),
  ('2026-08-16T13:00:00Z'::timestamptz, 'AE', 'ONIC')
) as v(scheduled_at, team_a, team_b)
where leagues.slug = 'mpl-id';

-- MPL Malaysia Season 18 — opening week (scheduled).
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, best_of, source)
select id, 'Week 1', v.scheduled_at, v.team_a, v.team_b, 'scheduled', 3, 'manual'
from leagues, (values
  ('2026-08-14T09:00:00Z'::timestamptz, 'AC', 'BTRM'),
  ('2026-08-14T12:15:00Z'::timestamptz, 'VMS', 'FL'),
  ('2026-08-15T06:30:00Z'::timestamptz, 'FL', 'BTRM'),
  ('2026-08-15T09:00:00Z'::timestamptz, 'RRQ', 'TR'),
  ('2026-08-15T12:15:00Z'::timestamptz, 'SRG', 'iG'),
  ('2026-08-16T06:30:00Z'::timestamptz, 'iG', 'RRQ'),
  ('2026-08-16T09:00:00Z'::timestamptz, 'TR', 'SRG')
) as v(scheduled_at, team_a, team_b)
where leagues.slug = 'mpl-my';

-- MPL Philippines Season 18 — opening week (scheduled, season starts Aug 21 2026).
-- NOTE: exact kickoff times weren't published in the source checked, so times below are
-- estimated slots (07:00/10:00/13:00 UTC) following the same pattern as MPL ID/MY —
-- correct against id-mpl or the official MPL PH schedule before treating these as final.
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, best_of, source)
select id, 'Week 1', v.scheduled_at, v.team_a, v.team_b, 'scheduled', 3, 'manual'
from leagues, (values
  ('2026-08-21T07:00:00Z'::timestamptz, 'RORA', 'ONIC'),
  ('2026-08-21T10:00:00Z'::timestamptz, 'TLPH', 'FLCN'),
  ('2026-08-22T07:00:00Z'::timestamptz, 'APBR', 'TWIS'),
  ('2026-08-22T10:00:00Z'::timestamptz, 'OMG', 'TLPH'),
  ('2026-08-22T13:00:00Z'::timestamptz, 'FLCN', 'TNC'),
  ('2026-08-23T07:00:00Z'::timestamptz, 'ONIC', 'APBR'),
  ('2026-08-23T10:00:00Z'::timestamptz, 'TNC', 'RORA')
) as v(scheduled_at, team_a, team_b)
where leagues.slug = 'mpl-ph';
