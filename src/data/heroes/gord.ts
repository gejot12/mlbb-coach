import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'gord',
  name: 'Gord',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan stack combo yang meledak untuk burst besar ke satu target. Sangat kuat menahan melee diver dengan poke berkelanjutan.',
  strongAgainst: ['thamuz'],
  weakAgainst: ['nolan'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Lightning Truncheon menambah damage tambahan tiap stack combo Gord kena.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, bangun stack combo untuk burst maksimal.' },
    { minute: 4, action: 'Rotasi gank dengan combo stack penuh untuk kill cepat.' },
    { minute: 9, action: 'Kontrol objective dari jarak aman, terus stack combo.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang.' },
    { minute: 19, action: 'Teamfight: stack combo ke target priority sebelum burst penuh meledak.' },
  ],
};
