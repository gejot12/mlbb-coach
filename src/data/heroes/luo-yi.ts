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
  skills: [
    {
      type: 'passive',
      name: 'Astral Split',
      description:
        'Setelah pakai skill, Luo Yi meninggalkan bayangan/jejak sesaat yang bisa memicu efek tambahan saat menyerang lagi.',
    },
    {
      type: 'skill1',
      name: 'Ink Mastery',
      description:
        'Menembakkan serangan magic ke area target, memberi damage ke musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Phantom Rush',
      description:
        'Menukar posisi Luo Yi dengan ally atau musuh yang dipilih dalam jangkauan, berguna untuk menyelamatkan ally atau mengacaukan posisi musuh.',
    },
    {
      type: 'ultimate',
      name: 'Nine Realms',
      description:
        'Menandai area luas untuk beberapa saat, lalu memberi damage serentak ke semua musuh yang masih berada di area tersebut saat efek meledak.',
    },
  ],
};
