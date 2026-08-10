import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'eudora',
  name: 'Eudora',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'easy',
  summary:
    'Mage mid klasik dengan stun instan dan burst damage tinggi di awal-mid game. Sangat kuat menghukum hero melee yang dash mendekat.',
  strongAgainst: ['yin'],
  weakAgainst: ['nolan'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Lightning Truncheon sangat sinergi dengan stun instan Eudora untuk burst combo cepat.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih akurasi stun instan untuk poke/trade.' },
    { minute: 4, action: 'Rotasi gank setelah combo burst tersedia untuk kill cepat.' },
    { minute: 9, action: 'Kontrol objective dari jarak aman, stun musuh yang mendekat.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di belakang formasi.' },
    { minute: 19, action: 'Teamfight: stun target priority duluan sebelum combo burst penuh.' },
  ],
};
