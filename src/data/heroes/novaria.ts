import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'novaria',
  name: 'Novaria',
  roles: ['mage', 'support'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage-support hybrid dengan pod yang bisa ditempatkan untuk zoning, heal, atau damage area. Sangat fleksibel mengontrol tempo game lewat map.',
  strongAgainst: ['yin'],
  weakAgainst: ['zhuxin'],
  synergizesWith: ['atlas'],
  builds: [
    {
      label: 'Core Utility Mage',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'lightning-truncheon', 'concentrated-energy', 'divine-glaive'],
      note: 'Item hybrid damage-utility supaya pod tetap berguna sebagai zoning sekaligus damage.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, tempatkan pod di titik strategis untuk vision/zoning.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan pod sebagai zoning tambahan.' },
    { minute: 9, action: 'Kontrol objective dengan pod heal/damage sesuai kebutuhan tim.' },
    { minute: 14, action: 'Grouping dengan tim, sebar pod di jalur masuk musuh.' },
    { minute: 19, action: 'Teamfight: gunakan kombinasi pod untuk kontrol area sebelum fight utama.' },
  ],
};
