import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'zhask',
  name: 'Zhask',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan kemampuan memanggil kepala monster untuk bantu farm dan zoning, plus ultimate yang menciptakan minion tambahan.',
  strongAgainst: ['thamuz'],
  weakAgainst: ['saber'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Zoning',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny cocok untuk scaling magic power dengan gaya main zoning Zhask.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane dibantu kepala monster, jaga jarak aman.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan kepala monster sebagai zoning tambahan.' },
    { minute: 9, action: 'Kontrol objective dengan bantuan kepala monster untuk menang kontes damage.' },
    { minute: 14, action: 'Grouping dengan tim, gunakan kepala monster untuk zoning area fight.' },
    { minute: 19, action: 'Teamfight: gunakan ultimate untuk tambahan minion sebagai distraksi/damage.' },
  ],
};
