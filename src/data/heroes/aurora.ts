import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'aurora',
  name: 'Aurora',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'easy',
  summary:
    'Mage mid dengan kemampuan membekukan area yang efektif mengunci musuh melee sebelum mereka mendekat. Sangat kuat lawan tim dive.',
  strongAgainst: ['zilong'],
  weakAgainst: ['nolan'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Poke/Burst',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny cocok untuk scaling magic power di game panjang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih akurasi freeze area untuk poke/trade.' },
    { minute: 4, action: 'Rotasi gank dengan freeze untuk kunci kill.' },
    { minute: 9, action: 'Kontrol objective dari jarak aman, freeze musuh yang mendekat.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di belakang formasi.' },
    { minute: 19, action: 'Teamfight: freeze area sebelum musuh dive, lanjut burst combo ultimate.' },
  ],
};
