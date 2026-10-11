/**
 * Prioritas pick/ban di scene kompetitif — snapshot per 11 Oktober 2026, bersumber dari draft
 * statistics REAL turnamen MPL Indonesia & MPL Philippines Season 18 yang sedang berjalan
 * (mlbbhub.com/mpl/id/drafts + /stats dan mlbbhub.com/mpl/ph/drafts + /stats — mereka sendiri
 * mengagregasi draft dari Liquipedia). Cakupan: ±62 match / 148 game MPL ID dan ±54 match /
 * 122 game MPL PH (sampai Week 8). Angka ban/pick/win rate di bawah asli dari draft pro, bukan
 * tier list generik. Belum ada patch live baru setelah 2.2.16 (16 Sep 2026) saat snapshot ini
 * dibuat, jadi data masih satu "era balance".
 *
 * Kriteria:
 *  - 'premier' = masuk top-10 ban di KEDUA region dengan ban rate ≥30% di keduanya, ATAU
 *    top-3 pick di kedua region.
 *  - 'high' = sinyal kuat di satu region (top-5 ban, top-6 pick dengan win rate ≥50%, atau
 *    win rate ≥60% dengan ≥25 pick), atau top-10 ban di kedua region tapi salah satunya lemah.
 *
 * Catatan sampel kecil: win rate Masha di MPL PH (83%) cuma dari 6 pick — jangan dibaca sebagai
 * "pasti kuat"; yang lebih solid justru statusnya sebagai first-ban #2 sisi merah di kedua region.
 *
 * Snapshot ini TIDAK auto-update. Re-scrape mlbbhub.com/mpl/{id,ph}/drafts berkala, atau tunggu
 * akses LiquipediaDB API (lihat src/lib/liquipedia/client.ts) untuk data live.
 */
export interface MetaPriorityEntry {
  slug: string;
  tier: 'premier' | 'high';
  note: string;
}

export const COMPETITIVE_META_PRIORITY: MetaPriorityEntry[] = [
  { slug: 'freya', tier: 'premier', note: 'Hero paling sering diban di kedua region (MPL ID 80%, MPL PH 90%) dan first-ban #1 sisi merah (54% / 65%) — nyaris perma-ban; kalau lolos draft, win rate-nya tinggi (MPL PH ~71%).' },
  { slug: 'atlas', tier: 'premier', note: 'Ban rate raksasa di kedua region (MPL ID 70%, MPL PH 81%) dan first-ban favorit sisi biru — tapi kalau lolos, win rate-nya ~58% di MPL ID.' },
  { slug: 'fanny', tier: 'premier', note: 'Top-3 ban di kedua region (MPL ID 58%, MPL PH 65%); di MPL PH dia first-ban #1 sisi biru (24%) — mobilitasnya masih paling ditakuti.' },
  { slug: 'marcel', tier: 'premier', note: 'Top-5 ban di MPL ID (53%) dan top-7 di MPL PH (43%) — kontrol area-freeze-nya bikin tim pro lebih milih ban duluan daripada pick.' },
  { slug: 'paquito', tier: 'premier', note: 'Diban sekaligus di-pick tinggi di kedua region (ban 36% / 44%; pick 73 / 58 kali) — di MPL PH win rate-nya ~59%, di MPL ID ~47%.' },
  { slug: 'uranus', tier: 'premier', note: 'Top-10 ban di kedua region (MPL ID 33%, MPL PH 47%) dan sering di-pick (49x di MPL ID) — tank sustain yang selalu masuk draft.' },
  { slug: 'melissa', tier: 'premier', note: 'Top-10 ban di kedua region (MPL ID 36%, MPL PH 42%) walau kena nerf patch 2.2.16 — tim pro masih ban proaktif.' },
  { slug: 'hirara', tier: 'premier', note: 'Hero paling sering di-pick di kedua region (81x MPL ID, 101x MPL PH) dan top-5 ban di MPL ID (41%) — tapi win rate MPL PH cuma ~42%, jadi contested bukan berarti pasti menang.' },
  { slug: 'belerick', tier: 'premier', note: 'Top-3 pick di kedua region (67x MPL ID, 62x MPL PH) dengan win rate ~49-52% — pilihan tank/fighter default tim pro musim ini.' },
  { slug: 'mathilda', tier: 'high', note: 'Top-10 ban di kedua region (MPL ID 34%, MPL PH 27%) — mobilitas dan burst-nya bikin lawan waspada, tapi sinyalnya tidak sekuat Marcel/Uranus.' },
  { slug: 'selena', tier: 'high', note: 'Top-5 ban di MPL PH (47%) dan sering di-pick di MPL ID (42x) walau win rate-nya ~43% — dual-mode pick-off yang berbahaya kalau lolos.' },
  { slug: 'carmilla', tier: 'high', note: 'Win rate ~64% di MPL ID (33 pick), top-10 ban di sana (32%), dan top-8 pick di MPL PH (44x, ~50%) — support yang efektif kalau dipakai.' },
  { slug: 'eudora', tier: 'high', note: 'Top-6 pick di kedua region (44x MPL ID, 57x MPL PH) dengan win rate ~59% / ~53% — eksekutor early-game yang konsisten.' },
  { slug: 'nolan', tier: 'high', note: 'Win rate ~59% di MPL ID (41 pick) dan ~67% di MPL PH (45 pick) — sampel cukup besar, jadi sinyalnya solid.' },
  { slug: 'aulus', tier: 'high', note: 'Win rate ~67% di MPL ID (33 pick) — tertinggi di daftar win rate MPL ID; buff patch 2.2.16 (ramp-up + HP regen) kelihatan hasilnya di draft pro.' },
  { slug: 'obsidia', tier: 'high', note: 'Win rate ~61% di MPL ID (38 pick) — marksman yang konsisten menembus formasi tank lewat damage Bone Shard.' },
  { slug: 'gloo', tier: 'high', note: 'Win rate ~61% di MPL ID (31 pick) — tank yang tetap worth dipertimbangkan buat diban.' },
  { slug: 'rafaela', tier: 'high', note: 'Win rate ~68% di MPL PH (25 pick) — anchor sustain roam paling reliable di sana.' },
  { slug: 'claude', tier: 'high', note: 'Top-4 pick di MPL ID (59x) dengan win rate ~53% — marksman default tim ID, belum sekuat itu di MPL PH.' },
  { slug: 'masha', tier: 'high', note: 'First-ban #2 sisi merah di kedua region (MPL ID 10%, MPL PH 14%) dan top-10 ban di MPL PH (40x) pasca-rework 2.2.16 — win rate 83% di MPL PH baru dari 6 pick, belum bisa dipercaya penuh.' },
  { slug: 'barats', tier: 'high', note: 'Top-9 ban di MPL PH (40%) dan top-10 pick di sana (39x, ~51%) — tank/fighter exp yang sering di-contest di PH.' },
];

const META_PRIORITY_BY_SLUG = new Map(COMPETITIVE_META_PRIORITY.map((e) => [e.slug, e]));

export function getMetaPriority(slug: string): MetaPriorityEntry | undefined {
  return META_PRIORITY_BY_SLUG.get(slug);
}
