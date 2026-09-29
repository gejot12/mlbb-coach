/**
 * Prioritas pick/ban di scene kompetitif — snapshot per 29 September 2026, bersumber dari
 * tier list Season 42 / patch 2.2.16 (16 Sep 2026), cross-checked dari 2 sumber independen:
 * mlbbhub.com/tier-list dan agregasi hasil pencarian (esports.gg, bo3.gg, timesaver.gg, dll).
 * Hero dengan tier 'premier' muncul S-tier atau top-ban-priority di 2+ sumber; 'high' berarti
 * S/A-tier di minimal 1 sumber yang jelas. Ini level "tren meta" (siapa yang kuat/sering
 * dihindari dan kenapa), BUKAN log ban/pick per pertandingan otomatis — itu baru bisa didapat
 * kalau akses LiquipediaDB API sudah disetujui (lihat src/lib/liquipedia/client.ts), yang jadi
 * sumber utama ke depannya. Re-kurasi manual berkala selagi API belum aktif — TIDAK auto-update
 * mengikuti tiap patch, jadi cek ulang setelah ada patch balance besar berikutnya.
 */
export interface MetaPriorityEntry {
  slug: string;
  tier: 'premier' | 'high';
  note: string;
}

export const COMPETITIVE_META_PRIORITY: MetaPriorityEntry[] = [
  { slug: 'masha', tier: 'premier', note: 'S-tier di role tank maupun fighter pasca-rework 2.2.16 — 3 HP bar bikin dia unggul sustained fight, susah dihentikan tanpa burst besar.' },
  { slug: 'aulus', tier: 'premier', note: 'S-tier fighter exp lane, win rate ~58% di Season 42 berkat buff ramp-up dan HP regen patch 2.2.16.' },
  { slug: 'argus', tier: 'premier', note: 'S-tier fighter — buff Demonic Slash trigger + stun baru di Skill 2 bikin dia jauh lebih agresif dari sebelumnya.' },
  { slug: 'minotaur', tier: 'premier', note: 'S-tier tank/support, tetap jadi salah satu anchor roam terkuat musim ini.' },
  { slug: 'gloo', tier: 'premier', note: 'Nyaris perma-ban — masuk top-5 hero yang paling worth diban di ranked Season 42.' },
  { slug: 'rafaela', tier: 'premier', note: 'S-tier support, win rate ~59% — sustain roam paling dominan musim ini.' },
  { slug: 'floryn', tier: 'premier', note: 'S-tier support berbasis heal carry, konsisten di top pick support Season 42.' },
  { slug: 'hirara', tier: 'premier', note: 'Ban rate ~65% — assassin paling draft-warping musim ini meski pick rate-nya sendiri sedang.' },
  { slug: 'obsidia', tier: 'high', note: 'Satu-satunya marksman S-tier musim ini, damage Bone Shard-nya efektif tembus formasi tank.' },
  { slug: 'khufra', tier: 'high', note: 'S-tier tank di sebagian sumber — tetap jadi pilihan kuat buat lock target/counter mobilitas.' },
  { slug: 'marcel', tier: 'high', note: 'S-tier support di sebagian sumber, kuat mengunci teamfight lewat area-freeze.' },
  { slug: 'belerick', tier: 'high', note: 'A-tier tank sekaligus salah satu hero paling worth diban — sustain-nya bikin lane dominance susah direbut.' },
  { slug: 'eudora', tier: 'high', note: 'A-tier mage sekaligus top-ban-priority — eksekutor early-game yang masih ditakuti draft lawan.' },
  { slug: 'paquito', tier: 'high', note: 'A-tier fighter meski kena nerf burst early-mid di patch 2.2.16 — tetap worth diban karena snowball potential-nya.' },
  { slug: 'bruno', tier: 'high', note: 'Baru naik ke A-tier pasca-rework 2.2.16 — sekarang bisa buka fight dari jarak jauh lewat Worldie, bukan cuma finisher.' },
  { slug: 'ling', tier: 'high', note: 'A-tier assassin, wall-walk-nya tetap relevan buat pick-off dan reposisi cepat.' },
];

const META_PRIORITY_BY_SLUG = new Map(COMPETITIVE_META_PRIORITY.map((e) => [e.slug, e]));

export function getMetaPriority(slug: string): MetaPriorityEntry | undefined {
  return META_PRIORITY_BY_SLUG.get(slug);
}
