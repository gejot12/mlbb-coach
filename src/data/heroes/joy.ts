import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'joy',
  name: 'Joy',
  roles: ['assassin'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Assassin dengan shield-dash yang bisa memantul dan menyerap skillshot musuh. Sangat sulit ditangkap, kuat lawan mage yang mengandalkan skillshot.',
  strongAgainst: ['eudora'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['arcane-boots', 'lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive'],
      note: 'Build magic damage karena skill Joy scaling dari magic power meski role assassin.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih rangkaian dash-pantul untuk mobilitas maksimal.' },
    { minute: 4, action: 'Rotasi gank dengan dash-pantul untuk elemen kejutan.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 14, action: 'Snowball dengan terus memburu mage/marksman musuh.' },
    { minute: 19, action: 'Teamfight: dash-pantul masuk ke backline musuh, serap skillshot di jalan.' },
  ],
};
