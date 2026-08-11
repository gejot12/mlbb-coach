import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'cyclops',
  name: 'Cyclops',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'easy',
  summary:
    'Mage mid dengan mata robot yang bisa dipanggil untuk poke jarak jauh dan ultimate laser yang menghukum musuh sejajar.',
  strongAgainst: ['miya'],
  weakAgainst: ['nolan'],
  synergizesWith: ['tigreal'],
  builds: [
    {
      label: 'Core Poke',
      itemSlugs: ['lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Lightning Truncheon sinergi baik dengan multi-hit dari skill mata robot.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, poke musuh dengan mata robot dari jarak aman.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan poke jarak jauh.' },
    { minute: 9, action: 'Kontrol objective dari jarak jauh, hindari kontak langsung.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang.' },
    { minute: 19, action: 'Teamfight: ultimate laser ke formasi musuh yang sejajar.' },
  ],
};
