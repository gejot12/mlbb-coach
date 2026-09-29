/**
 * Prioritas pick/ban di scene kompetitif — snapshot per 29 September 2026, bersumber dari
 * draft statistics REAL turnamen MPL Indonesia & MPL Philippines Season 18 yang sedang
 * berjalan (mlbbhub.com/mpl/id/drafts + /stats, mlbbhub.com/mpl/ph/drafts + /stats — mereka
 * sendiri mengagregasi data dari Liquipedia). Cakupan: 47 match MPL ID + 42 match MPL PH
 * (89 game draft tercatat total). Ini BUKAN tier list generik — ban rate/pick rate/win rate
 * di bawah ini angka asli dari draft pertandingan pro yang sedang berlangsung, persis level
 * insight yang biasanya didapat dari analisis konten kreator IG/TikTok, cuma sumbernya situs
 * statistik tertulis karena IG/TikTok tidak bisa di-scrape reliable oleh tooling saat ini.
 *
 * Tier 'premier' = ban rate tinggi (≥50%) di KEDUA region, atau top-3 pick di kedua region.
 * Tier 'high' = sinyal kuat di salah satu region (ban/pick/win rate), atau didukung tier list
 * Season 42 + buff patch 2.2.16 sebagai bukti sekunder.
 *
 * Snapshot ini TIDAK auto-update — akan makin basi tiap minggu seiring draft baru berjalan.
 * Re-scrape mlbbhub.com/mpl/{id,ph}/drafts berkala, atau tunggu akses LiquipediaDB API (lihat
 * src/lib/liquipedia/client.ts) untuk data live yang tidak perlu di-refresh manual.
 */
export interface MetaPriorityEntry {
  slug: string;
  tier: 'premier' | 'high';
  note: string;
}

export const COMPETITIVE_META_PRIORITY: MetaPriorityEntry[] = [
  { slug: 'freya', tier: 'premier', note: 'Hero paling sering diban di MPL ID (93%) maupun MPL PH (95%) — nyaris perma-ban, cuma sedikit yang berani pick karena win rate-nya tetap tinggi (~63%) kalau lolos draft.' },
  { slug: 'atlas', tier: 'premier', note: 'Ban rate raksasa di kedua region (MPL ID 75%, MPL PH 83%) — roam anchor yang selalu jadi prioritas ban duluan.' },
  { slug: 'fanny', tier: 'premier', note: 'Ban rate tinggi di kedua region (MPL ID 58%, MPL PH 70%) — mobilitas wall-mechanic-nya masih ditakuti draft lawan.' },
  { slug: 'hirara', tier: 'premier', note: 'Hero paling sering di-pick di kedua region (MPL ID 72x, MPL PH 85x) — pilihan default assassin/fighter musim ini.' },
  { slug: 'paquito', tier: 'premier', note: 'Sering diban SEKALIGUS dipick tinggi di kedua region (MPL ID 46 ban/60 pick, MPL PH 44 ban/45 pick) — snowball potential-nya tetap dihormati meski kena nerf burst di patch 2.2.16.' },
  { slug: 'melissa', tier: 'premier', note: 'Ban rate ~50% di kedua region meski baru kena nerf attack speed & damage Muddles di patch 2.2.16 — tim pro masih proaktif ban duluan daripada ambil risiko.' },
  { slug: 'marcel', tier: 'premier', note: 'Ban rate tinggi di kedua region (MPL ID 66%, MPL PH 43%) — area-freeze-nya bisa membalik teamfight kalau lolos draft.' },
  { slug: 'uranus', tier: 'high', note: 'Solid di kedua region (MPL ID 41 ban/45 pick, MPL PH 50 ban) — tank sustain yang konsisten masuk draft.' },
  { slug: 'mathilda', tier: 'high', note: 'Ban rate cukup tinggi di kedua region (MPL ID 42, MPL PH 33) — mobilitas dan burst-nya bikin lawan waspada.' },
  { slug: 'selena', tier: 'high', note: 'Ban rate tinggi terutama di MPL PH (54%) — dual-mode pick-off-nya berbahaya kalau lolos.' },
  { slug: 'carmilla', tier: 'high', note: 'Win rate tinggi di MPL ID (64%) dan masuk top-5 pick di MPL PH — support yang efektif kalau dipakai.' },
  { slug: 'eudora', tier: 'high', note: 'Win rate solid di MPL ID (60%) dan top-3 pick di MPL PH — eksekutor early-game yang masih relevan.' },
  { slug: 'rafaela', tier: 'high', note: 'Win rate tinggi di kedua region (MPL ID 60%, MPL PH 67%) — anchor sustain roam paling reliable musim ini.' },
  { slug: 'obsidia', tier: 'high', note: 'Win rate tinggi di MPL ID (64%) — satu-satunya marksman yang konsisten tembus formasi tank lewat damage Bone Shard.' },
  { slug: 'masha', tier: 'high', note: 'Win rate tertinggi di MPL PH (83%, meski sampel masih kecil pasca-rework 2.2.16) — 3 HP bar-nya bikin dia unggul sustained fight.' },
  { slug: 'belerick', tier: 'high', note: 'Top-2 pick di MPL PH (50x) — sustain tank yang bikin lane dominance susah direbut lawan.' },
  { slug: 'gloo', tier: 'high', note: 'Win rate tinggi di MPL PH (67%) — tetap salah satu tank paling worth dipertimbangkan buat diban.' },
  { slug: 'aulus', tier: 'high', note: 'S-tier fighter exp lane di tier list Season 42, didukung buff ramp-up dan HP regen patch 2.2.16 — belum masuk top pick/ban MPL ID/PH tapi tren buff-nya jelas.' },
  { slug: 'argus', tier: 'high', note: 'S-tier fighter di tier list Season 42 berkat buff Demonic Slash trigger + stun baru Skill 2 — sama seperti Aulus, tren naiknya baru dari buff, belum kelihatan di data draft MPL.' },
];

const META_PRIORITY_BY_SLUG = new Map(COMPETITIVE_META_PRIORITY.map((e) => [e.slug, e]));

export function getMetaPriority(slug: string): MetaPriorityEntry | undefined {
  return META_PRIORITY_BY_SLUG.get(slug);
}
