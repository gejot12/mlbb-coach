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
  skills: [
    {
      type: 'passive',
      name: 'Raise Dead',
      description:
        'Musuh yang tewas di dekat Vexana bisa dibangkitkan sebagai skeleton yang membantu menyerang dan bertahan di lane.',
    },
    {
      type: 'skill1',
      name: 'Bone Prison',
      description:
        'Melemparkan rantai tulang ke target area, mengunci pergerakan musuh yang terkena untuk waktu singkat.',
    },
    {
      type: 'skill2',
      name: 'Life Sacrifice',
      description:
        'Menandai target dengan kutukan yang menyerap HP dari musuh menuju Vexana selama durasi tertentu.',
    },
    {
      type: 'ultimate',
      name: 'Skeletal Warriors',
      description:
        'Mengubah minion di sekitar area target menjadi pasukan skeleton bersenjata yang bertarung membantu Vexana untuk sementara waktu.',
    },
  ],
};
