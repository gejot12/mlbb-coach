import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'suyou',
  name: 'Suyou',
  roles: ['assassin', 'mage'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin-mage hybrid dengan dua gaya bertarung (pedang dan kuas) yang bisa ditukar sesuai kebutuhan combo. Sangat fleksibel lawan berbagai komposisi.',
  strongAgainst: ['eudora'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Hybrid Burst',
      itemSlugs: ['holy-crystal', 'lightning-truncheon', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Build magic damage penuh karena kedua gaya bertarung Suyou scaling dari magic power.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih transisi antara gaya pedang dan kuas.' },
    { minute: 4, action: 'Gank lane dengan kombinasi kedua gaya untuk burst maksimal.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu mage/marksman musuh.' },
    { minute: 18, action: 'Teamfight: masuk dari flank, kombinasikan kedua gaya untuk burst maksimal.' },
  ],
};
