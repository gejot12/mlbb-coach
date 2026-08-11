import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'gatotkaca',
  name: 'Gatotkaca',
  roles: ['tank'],
  lanes: ['exp', 'jungle'],
  difficulty: 'medium',
  summary:
    'Tank dengan kulit baja dan ultimate yang memantulkan sebagian damage ke penyerang. Sangat kuat menghukum musuh basic-attack reliant.',
  strongAgainst: ['zilong'],
  weakAgainst: ['eudora'],
  synergizesWith: ['miya'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'antique-cuirass', 'immortality', 'dominance-ice'],
      note: 'HP dan physical defense tinggi memaksimalkan efek reflect damage ultimate.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tahan exp lane atau clear jungle, manfaatkan kulit baja untuk trade aman.' },
    { minute: 4, action: 'Rotasi gank atau bantu lane lain setelah level cukup.' },
    { minute: 9, action: 'Kontrol turtle, ultimate reflect membantu menang kontes damage.' },
    { minute: 14, action: 'Jadi frontline saat grouping, tarik perhatian musuh sebanyak mungkin.' },
    { minute: 19, action: 'Teamfight: berdiri di depan formasi, ultimate reflect damage basic attack musuh.' },
  ],
};
