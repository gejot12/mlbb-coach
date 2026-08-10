import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'fanny',
  name: 'Fanny',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan mobilitas cable tertinggi di game. Sangat kuat membantai backline squishy, tapi rapuh kalau CC-nya diinterupsi.',
  strongAgainst: ['layla', 'kagura', 'lunox'],
  weakAgainst: ['khufra', 'franco'],
  synergizesWith: ['estes', 'angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'berserkers-fury', 'endless-battle', 'malefic-roar', 'wind-of-nature'],
      note: 'Prioritas attack speed rendah, damage per cable tinggi. Boots opsional tergantung mobility yang sudah cukup dari skill.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle secepat mungkin, latih cable-cable dasar di dinding map.' },
    { minute: 4, action: 'Cari gank cepat ke lane dengan cable combo begitu level 4 tercapai.' },
    { minute: 8, action: 'Fokus farm jungle camp + steal buff musuh kalau memungkinkan.' },
    { minute: 13, action: 'Split push sendiri atau tunggu peluang pick-off backline saat grouping.' },
    { minute: 18, action: 'Teamfight: masuk dari flank saat CC utama musuh (hook/stun) sudah terpakai.' },
  ],
};
