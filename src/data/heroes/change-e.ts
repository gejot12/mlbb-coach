import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'change-e',
  name: "Chang'e",
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan orbit proyektil yang bisa poke sambil bergerak bebas, plus ultimate skill-shot jarak sangat jauh. Kuat zoning melee diver dari kejauhan.',
  strongAgainst: ['thamuz'],
  weakAgainst: ['nolan'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Poke',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'lightning-truncheon', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny membantu sustain mana untuk terus poke pakai orbit proyektil.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, poke musuh dengan orbit proyektil sambil tetap bergerak.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan poke jarak jauh sebelum masuk kontak.' },
    { minute: 9, action: 'Kontrol objective dari luar jangkauan musuh.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang dan aman.' },
    { minute: 19, action: 'Teamfight: poke terus dari jarak jauh, simpan ultimate untuk finishing target HP rendah.' },
  ],
};
