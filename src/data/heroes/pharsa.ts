import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'pharsa',
  name: 'Pharsa',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan poke jarak sangat jauh dan ultimate area burung yang efektif menghukum komposisi musuh yang mengelompok.',
  strongAgainst: ['minotaur'],
  weakAgainst: ['nolan'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Poke',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'lightning-truncheon', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny membantu sustain mana untuk terus poke sepanjang game.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, mulai poke musuh dari jarak sangat jauh.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan poke jarak jauh sebelum masuk kontak.' },
    { minute: 9, action: 'Kontrol objective dari luar jangkauan musuh, ultimate area saat mereka mengelompok.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang dan aman.' },
    { minute: 19, action: 'Teamfight: buka fight dengan ultimate area ke formasi musuh yang berkumpul.' },
  ],
};
