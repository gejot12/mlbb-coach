import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'phylax',
  name: 'Phylax',
  roles: ['tank', 'marksman'],
  lanes: ['roam', 'gold'],
  difficulty: 'hard',
  summary:
    'Hero tank-marksman hybrid pertama di MLBB — bisa bertarung dalam mode melee tanky atau mode ranged marksman tergantung situasi. Sangat fleksibel untuk engage maupun damage berkelanjutan.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['tough-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'blade-of-despair'],
      note: 'Item hybrid tank-damage supaya efektif di kedua mode melee dan ranged.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam/gold sesuai mode yang dipilih, latih transisi mode melee-ranged.' },
    { minute: 4, action: 'Roam bantu lane lain atau farm gold lane tergantung kebutuhan tim.' },
    { minute: 9, action: 'Kontrol turtle, mode melee untuk engage atau mode ranged untuk damage aman.' },
    { minute: 14, action: 'Selalu fleksibel ganti mode sesuai kebutuhan rotasi grup.' },
    { minute: 19, action: 'Teamfight: mode melee untuk buka fight dengan knockup, mode ranged untuk damage sustained.' },
  ],
};
