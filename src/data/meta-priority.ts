/**
 * Prioritas pick/ban di scene kompetitif terkini — bersumber dari analisis draft MSC 2026
 * (Esports World Cup, Paris, Jul-Agu 2026) oleh GameMarket.gg. Ini level "tren meta pro
 * scene" (siapa yang sering di-ban/prioritas pick dan kenapa), BUKAN log ban/pick per
 * pertandingan — itu baru bisa didapat kalau akses LiquipediaDB API sudah disetujui (lihat
 * src/lib/liquipedia/client.ts). Beberapa hero yang disebut sumber (Hirara, Barats, Marcel,
 * Arlott, Lapu-Lapu, Julian, Hanabi) belum ada di roster situs ini, jadi tidak dimasukkan
 * di sini — tambahkan saat hero-hero itu ditambahkan ke data/heroes/.
 */
export interface MetaPriorityEntry {
  slug: string;
  tier: 'premier' | 'high';
  note: string;
}

export const MSC_2026_META_PRIORITY: MetaPriorityEntry[] = [
  { slug: 'chou', tier: 'premier', note: 'Premier pick-or-ban status berkat kemampuan pick-off yang tak tertandingi.' },
  { slug: 'gloo', tier: 'premier', note: 'Nyaris perma-ban karena sulit dibunuh dan kontrol vision tinggi.' },
  { slug: 'nolan', tier: 'high', note: 'Jungler tempo & snowball utama, kuat kontrol objective.' },
  { slug: 'fanny', tier: 'high', note: 'Pick mobilitas tinggi berbasis skill wall-mechanic.' },
  { slug: 'ling', tier: 'high', note: 'Assassin wall-walk yang bisa membalik momentum lewat pick-off bersih.' },
  { slug: 'esmeralda', tier: 'high', note: 'Duelist self-sustain yang mendominasi side-lane sendirian.' },
  { slug: 'zhuxin', tier: 'high', note: 'Zone-control & CC engine yang mendikte teamfight.' },
  { slug: 'eudora', tier: 'high', note: 'Eksekutor early-game untuk gank 3-man ke side lane.' },
  { slug: 'valentina', tier: 'high', note: 'Ultimate-stealer yang memaksa draft lawan lebih hati-hati.' },
  { slug: 'melissa', tier: 'high', note: 'Carry anti-dive S-Tier dengan mekanik protektif lawan assassin.' },
  { slug: 'karrie', tier: 'high', note: 'Spesialis anti-tank lewat true damage yang menembus armor.' },
  { slug: 'atlas', tier: 'high', note: 'Anchor engagement roam untuk buka teamfight.' },
  { slug: 'estes', tier: 'high', note: 'Anchor sustain roam untuk trade panjang.' },
  { slug: 'floryn', tier: 'high', note: 'Anchor sustain roam berbasis heal carry.' },
];

const META_PRIORITY_BY_SLUG = new Map(MSC_2026_META_PRIORITY.map((e) => [e.slug, e]));

export function getMetaPriority(slug: string): MetaPriorityEntry | undefined {
  return META_PRIORITY_BY_SLUG.get(slug);
}
