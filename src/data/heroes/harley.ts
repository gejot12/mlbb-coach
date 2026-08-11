import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'harley',
  name: 'Harley',
  roles: ['mage', 'assassin'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage-assassin hybrid dengan teleport jangkauan pendek dan burst combo instan. Sangat efektif membunuh marksman/mage squishy dalam sekejap.',
  strongAgainst: ['miya'],
  weakAgainst: ['franco'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Fokus burst damage karena Harley mengandalkan combo instan dari teleport.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih akurasi teleport untuk combo burst.' },
    { minute: 4, action: 'Rotasi gank dengan combo teleport-burst untuk kill cepat.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 14, action: 'Grouping dengan tim, tunggu peluang burst combo penuh.' },
    { minute: 19, action: 'Teamfight: teleport ke backline musuh, burst combo secepat mungkin lalu kabur.' },
  ],
};
