-- Content refresh: latest patch + recent MPL ID/PH results (Sep 2026).
-- Sources: mlbbhub.com/patch-notes (patch 2.2.16 detail), gosugamers.net (EVOS vs TLID
-- match, verified via its dedicated match page), mlbbhub.com live standings (Team Falcons
-- vs ONIC PH / Aurora Gaming matches). Checked 2026-09-29. This is a one-off manual content
-- update (not a schema migration) — run once in the Supabase SQL Editor.

insert into patch_notes (version, release_date, title, summary, source) values (
  '2.2.16',
  '2026-09-16',
  'Patch 2.2.16 — Rework Masha & Bruno, Map Overhaul',
  'Patch terbesar musim ini. Masha di-rework total dari assassin jadi sustained berserker dengan mekanik Feral baru dan 3 HP bar — coba dulu di Classic sebelum dibawa ranked, kitnya beda total. Bruno juga di-rework (kontrol & skill dioptimalkan, identitas powerball tetap). 12 hero dibuff: Aulus, Argus, Aldous, Lukas, Kalea, Alpha, Kagura, Edith, Karina, Cici, Kaja, dan Akai (mode Classic) — worth dicoba lagi kalau sebelumnya kamu skip mereka. 6 hero kena nerf: Zilong (mode Classic), Melissa, Miya, Hanabi, Yi Sun-shin, dan Paquito — pertimbangkan pick lain dulu sampai damage/mobility mereka pulih. Perubahan sistem besar: base gold jungle camp dipangkas 13% dan threshold bounty gold diturunkan ke 1500 (early game lebih ketat), map dapat Revealing Wisps + Healing Turtle + Golden Turret, basic attack dari efek skill sekarang bisa kena turret, targeting priority "lowest HP" diganti "lowest effective HP" (mempertimbangkan penetrasi vs defense), dan 24 hero direbalance khusus mode Brawl.',
  'manual'
);

insert into patch_note_changes (patch_note_id, change_type, subject_name, subject_slug, description, sort_order)
select id, ct, name, slug, desc_text, ord
from patch_notes, (values
  ('hero_adjust', 'Masha', 'masha', 'Rework total: dari assassin combo jadi sustained berserker lewat mekanik Feral baru dengan 3 HP bar.', 1),
  ('hero_adjust', 'Bruno', 'bruno', 'Rework: kontrol dan mekanik skill dioptimalkan, identitas powerball-kicking marksman dipertahankan.', 2),
  ('hero_buff', 'Aulus', 'aulus', 'Ramp-up dipercepat, jendela damage dipadatkan, HP regen dinaikkan untuk extended fight.', 3),
  ('hero_buff', 'Argus', 'argus', 'Demonic Slash lebih sering trigger, Skill 2 dapat stun baru, damage ultimate naik.', 4),
  ('hero_buff', 'Aldous', 'aldous', 'Kekuatan tempur dan income early-game dinaikkan, kurangi ketergantungan farm pasif.', 5),
  ('hero_buff', 'Lukas', 'lukas', 'Diperkuat untuk exp lane sambil tetap viable sebagai jungler.', 6),
  ('hero_buff', 'Kalea', 'kalea', 'Buff menyeluruh ke damage dan survivability sebagai fighter-support.', 7),
  ('hero_buff', 'Alpha', 'alpha', 'Passive sekarang scale dengan Total Physical Attack, regen Skill 2 dioptimalkan.', 8),
  ('hero_buff', 'Kagura', 'kagura', 'Feel kontrol Seimei Umbrella diperbaiki saat reposisi dalam combat.', 9),
  ('hero_buff', 'Edith', 'edith', 'Inisiatif dan fleksibilitas saat engage sedikit dinaikkan.', 10),
  ('hero_buff', 'Karina', 'karina', 'Frekuensi pakai Skill 1 dan efektivitas basic attack dinaikkan.', 11),
  ('hero_buff', 'Cici', 'cici', 'Damage early-mid ke unit HP tinggi dan kecepatan bunuh Exp Crab dinaikkan.', 12),
  ('hero_buff', 'Kaja', 'kaja', 'HP regen sedikit dinaikkan.', 13),
  ('hero_buff', 'Akai', 'akai', 'Mode Classic: damage naik, frekuensi knockback ultimate disesuaikan.', 14),
  ('hero_nerf', 'Zilong', 'zilong', 'Mode Classic: damage output dan frekuensi immunity control dikurangi.', 15),
  ('hero_nerf', 'Melissa', 'melissa', 'Bonus/durasi attack speed Skill 1 dikurangi, damage transfer dan inheritance efek Muddles dikurangi.', 16),
  ('hero_nerf', 'Miya', 'miya', 'Fix damage Split Arrow yang tidak sesuai, damage single-target sedikit dikurangi.', 17),
  ('hero_nerf', 'Hanabi', 'hanabi', 'Ditambah damage falloff pada bounce untuk membatasi damage sustained di teamfight.', 18),
  ('hero_nerf', 'Yi Sun-shin', 'yi-sun-shin', 'Cooldown Skill 1 dinaikkan untuk mengurangi mobilitas keseluruhan.', 19),
  ('hero_nerf', 'Paquito', 'paquito', 'Burst damage early-mid game sedikit dikurangi untuk mencegah snowball cepat.', 20),
  ('hero_adjust', 'Odette', 'odette', 'Sekarang bisa bergerak dengan kecepatan berkurang saat cast Ultimate.', 21),
  ('hero_adjust', 'Sun', 'sun', 'Penyesuaian untuk membatasi drain resource roaming ke teman satu tim.', 22),
  ('hero_adjust', 'Marcel', 'marcel', 'Sinergi skill diperbaiki, damage/frekuensi cast early dikurangi, sekarang bisa interrupt skill bertarget lokasi.', 23),
  ('hero_adjust', 'Kadita', 'kadita', 'Movement speed saat roam ke side lane early-mid game dinaikkan.', 24),
  ('hero_adjust', 'Hylos', 'hylos', 'Efek passive disesuaikan untuk growth atribut yang lebih konsisten.', 25),
  ('system_change', 'Economy', null, 'Base gold jungle camp dipangkas 13%, threshold bounty gold deficit diturunkan dari 2000 ke 1500.', 26),
  ('system_change', 'Map Changes', null, 'Fitur baru: Revealing Wisps (vision), Healing Turtle menggantikan shield, Golden Turret (bonus gold tim).', 27),
  ('system_change', 'Turret Interaction', null, 'Basic attack yang dipicu efek skill sekarang bisa kena turret dan memicu HP regen.', 28),
  ('system_change', 'Targeting Priority', null, 'Prioritas "Lowest HP" diganti "Lowest Effective HP" — mempertimbangkan penetrasi vs defense.', 29),
  ('system_change', 'Brawl Rebalance', null, '24 hero direbalance khusus mode Brawl (damage/damage taken) berdasarkan win/pick rate.', 30)
) as changes(ct, name, slug, desc_text, ord)
where patch_notes.version = '2.2.16';

-- Recent completed matches.
insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, score_a, score_b, winner, best_of, source, source_url)
select id, 'Week 6', '2026-09-20T13:15:00Z'::timestamptz, 'EVOS', 'Team Liquid ID', 'completed', 2, 1, 'EVOS', 3, 'manual',
  'https://www.gosugamers.net/mobile-legends/tournaments/63111-mpl-indonesia-season-18/matches/658877-evos-vs-team-liquid-id'
from leagues where slug = 'mpl-id';

insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, score_a, score_b, winner, best_of, source, source_url)
select id, 'Regular Season', '2026-09-26T00:00:00Z'::timestamptz, 'Team Falcons PH', 'ONIC Philippines', 'completed', 2, 1, 'Team Falcons PH', 3, 'manual',
  'https://mlbbhub.com/mpl/ph'
from leagues where slug = 'mpl-ph';

insert into matches (league_id, stage, scheduled_at, team_a, team_b, status, score_a, score_b, winner, best_of, source, source_url)
select id, 'Regular Season', '2026-09-27T00:00:00Z'::timestamptz, 'Aurora Gaming PH', 'Team Falcons PH', 'completed', 0, 2, 'Team Falcons PH', 3, 'manual',
  'https://mlbbhub.com/mpl/ph'
from leagues where slug = 'mpl-ph';
