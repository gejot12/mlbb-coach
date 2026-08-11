import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'zetian',
  name: 'Zetian',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage mid dengan puppet/ilusi yang membingungkan target musuh dan burst combo dari jarak aman. Kuat lawan hero yang mengandalkan dive langsung.',
  strongAgainst: ['zilong'],
  weakAgainst: ['nolan'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny bagus untuk scaling magic power di game panjang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, jaga jarak aman dari kontak langsung.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan combo puppet untuk burst.' },
    { minute: 9, action: 'Kontrol objective dari jarak aman, gunakan puppet untuk mengecoh musuh.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang.' },
    { minute: 19, action: 'Teamfight: gunakan puppet untuk membingungkan fokus musuh sebelum burst combo.' },
  ],
};
