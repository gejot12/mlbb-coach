import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'gusion',
  name: 'Gusion',
  roles: ['assassin', 'mage'],
  lanes: ['jungle', 'mid'],
  difficulty: 'hard',
  summary:
    'Assassin/mage hybrid dengan burst combo cepat lewat dagger reset. Sangat kuat membunuh marksman/mage musuh dalam sekejap.',
  strongAgainst: ['karrie', 'layla'],
  weakAgainst: ['tigreal', 'franco'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Lightning Truncheon sangat sinergi dengan combo dagger multi-hit Gusion.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid/jungle, kumpulkan mana dan level secepat mungkin.' },
    { minute: 4, action: 'Rotasi gank ke lane lain setelah combo ultimate tersedia.' },
    { minute: 8, action: 'Objective control (turtle) sambil terus cari pick-off ke carry musuh.' },
    { minute: 13, action: 'Snowball dengan terus memburu target priority, hindari inisiasi ke tank duluan.' },
    { minute: 18, action: 'Teamfight: tunggu CC utama musuh terpakai baru dive ke backline.' },
  ],
};
