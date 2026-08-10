import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'vexana',
  name: 'Vexana',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan skeleton summon yang membantu farm dan zoning, plus ultimate yang mengubah minion jadi skeleton tempur. Kuat menekan lane dan objective.',
  strongAgainst: ['grock'],
  weakAgainst: ['karina'],
  synergizesWith: ['khufra'],
  builds: [
    {
      label: 'Core Zoning',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny membantu sustain mana untuk terus summon skeleton.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane dibantu skeleton summon, jaga jarak aman.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan skeleton sebagai zoning tambahan.' },
    { minute: 9, action: 'Kontrol objective dengan bantuan skeleton untuk menang kontes damage.' },
    { minute: 14, action: 'Grouping dengan tim, gunakan skeleton untuk zoning area fight.' },
    { minute: 19, action: 'Teamfight: ubah minion jadi skeleton lewat ultimate untuk bantuan damage tambahan.' },
  ],
};
