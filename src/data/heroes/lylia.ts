import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'lylia',
  name: 'Lylia',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan illusion yang membingungkan target musuh dan portal untuk mobilitas cepat. Sangat kuat lawan assassin yang mengandalkan single-target lock.',
  strongAgainst: ['saber'],
  weakAgainst: ['pharsa'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Poke/Burst',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny cocok untuk scaling magic power di game panjang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, gunakan portal untuk pathing efisien.' },
    { minute: 4, action: 'Rotasi cepat lewat portal untuk bantu lane lain.' },
    { minute: 9, action: 'Kontrol objective, illusion membantu membingungkan fokus musuh.' },
    { minute: 14, action: 'Grouping dengan tim, portal memudahkan reposisi cepat saat terancam.' },
    { minute: 19, action: 'Teamfight: gunakan illusion untuk mengecoh assassin yang mencoba fokus kamu.' },
  ],
};
