import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'valir',
  name: 'Valir',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan dinding api dan knockup yang efektif mengontrol jalur masuk musuh. Kuat menahan melee diver dengan zoning api.',
  strongAgainst: ['zilong'],
  weakAgainst: ['nolan'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Zoning',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'lightning-truncheon', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny bagus untuk sustain mana karena Valir sering spam skill untuk zoning.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, pasang dinding api di jalur rawan gank.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan zoning api.' },
    { minute: 9, action: 'Kontrol objective, gunakan dinding api untuk blokir jalur musuh.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang.' },
    { minute: 19, action: 'Teamfight: dinding api di jalur masuk musuh sebelum fight utama dimulai.' },
  ],
};
