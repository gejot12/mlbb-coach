import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'minotaur',
  name: 'Minotaur',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Tank roam dengan mode marah yang memberi heal besar ke tim dan stun area lewat ultimate. Sangat kuat mengunci dan membalikkan teamfight.',
  strongAgainst: ['saber', 'zilong'],
  weakAgainst: ['pharsa'],
  synergizesWith: ['masha'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['tough-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'cursed-helmet'],
      note: 'HP tinggi membuat heal ultimate ke tim jadi jauh lebih besar juga.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, cari peluang stun awal untuk kill kecil.' },
    { minute: 4, action: 'Roam bantu lane lain dengan kombinasi stun-inisiasi.' },
    { minute: 9, action: 'Kontrol turtle, simpan ultimate untuk kontes besar.' },
    { minute: 14, action: 'Selalu siap engage duluan saat grouping dengan tim.' },
    { minute: 19, action: 'Teamfight: ultimate ke tengah kerumunan musuh untuk stun sekaligus heal tim sendiri.' },
  ],
};
