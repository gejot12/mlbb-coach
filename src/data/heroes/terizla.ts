import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'terizla',
  name: 'Terizla',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan palu besar dan ultimate knockback area yang efektif menghukum backline squishy yang berkumpul.',
  strongAgainst: ['layla'],
  weakAgainst: ['lancelot'],
  synergizesWith: ['tigreal'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['warrior-boots', 'blade-of-despair', 'malefic-roar', 'wind-of-nature', 'immortality'],
      note: 'Penetration tinggi penting karena Terizla sering ditempatkan lawan tank tebal.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tahan exp lane, farm dengan pukulan area untuk clear minion cepat.' },
    { minute: 4, action: 'Rotasi bantu lane lain setelah exp lane aman.' },
    { minute: 9, action: 'Kontrol turtle, gunakan ultimate untuk knockback musuh yang berkumpul.' },
    { minute: 14, action: 'Jadi frontline/damage hybrid saat grouping dengan tim.' },
    { minute: 19, action: 'Teamfight: ultimate ke formasi musuh yang menumpuk untuk knockback massal.' },
  ],
};
