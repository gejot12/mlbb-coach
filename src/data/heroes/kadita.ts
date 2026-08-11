import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'kadita',
  name: 'Kadita',
  roles: ['assassin', 'mage'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Assassin-mage hybrid dengan burst combo darah dan mobilitas dash. Sangat efektif membunuh mage/marksman squishy dalam sekejap.',
  strongAgainst: ['eudora'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['raptor-machete', 'holy-crystal', 'lightning-truncheon', 'genius-wand', 'divine-glaive'],
      note: 'Build magic burst penuh karena semua skill Kadita scaling dari magic power.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih combo dash-burst untuk kill maksimal.' },
    { minute: 4, action: 'Gank lane dengan combo burst untuk kill cepat.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu mage/marksman musuh.' },
    { minute: 18, action: 'Teamfight: masuk dari flank, burst combo ke target priority.' },
  ],
};
