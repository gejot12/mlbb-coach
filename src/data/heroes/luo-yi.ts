import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'luo-yi',
  name: 'Luo Yi',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage mid dengan kemampuan menukar posisi dengan ally atau musuh lewat teleport. Sangat efektif mengganggu combo dive assassin dengan swap posisi.',
  strongAgainst: ['saber'],
  weakAgainst: ['eudora'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Utility Poke',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny bagus untuk scaling magic power sekaligus sustain mana.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih timing swap posisi untuk mobilitas.' },
    { minute: 4, action: 'Rotasi bantu lane lain lewat teleport swap.' },
    { minute: 9, action: 'Kontrol objective, gunakan swap untuk mengganggu combo musuh.' },
    { minute: 14, action: 'Grouping dengan tim, siap swap ally yang terjebak keluar bahaya.' },
    { minute: 19, action: 'Teamfight: swap assassin musuh yang dive ke posisi tidak menguntungkan mereka.' },
  ],
};
