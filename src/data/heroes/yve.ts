import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'yve',
  name: 'Yve',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage mid dengan bintang orbit yang bisa diposisikan untuk poke dan zoning fleksibel. Kuat menahan melee diver dari jarak jauh.',
  strongAgainst: ['thamuz'],
  weakAgainst: ['nolan'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Poke',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'lightning-truncheon', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny bagus untuk sustain mana karena Yve sering spam skill untuk zoning.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, posisikan bintang orbit untuk poke aman.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan zoning bintang.' },
    { minute: 9, action: 'Kontrol objective dari jarak jauh, hindari kontak langsung.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang.' },
    { minute: 19, action: 'Teamfight: zoning area fight dengan bintang sebelum burst combo ultimate.' },
  ],
};
