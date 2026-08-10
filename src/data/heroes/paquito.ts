import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'paquito',
  name: 'Paquito',
  roles: ['fighter'],
  lanes: ['exp', 'jungle'],
  difficulty: 'hard',
  summary:
    'Fighter dengan mekanik counter-punch yang membalas serangan musuh dengan damage tambahan. Sangat kuat lawan hero melee yang sering basic attack.',
  strongAgainst: ['chou'],
  weakAgainst: ['kagura'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Combo Burst',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'berserkers-fury'],
      note: 'Attack speed membantu memicu counter-punch lebih sering dalam combo.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane atau clear jungle, latih timing counter-punch.' },
    { minute: 4, action: 'Gank lane dengan combo dash-punch untuk burst awal.' },
    { minute: 9, action: 'Kontrol turtle, manfaatkan counter-punch saat dikontes musuh melee.' },
    { minute: 14, action: 'Ikut grouping, cari peluang combo penuh ke target priority.' },
    { minute: 19, action: 'Teamfight: masuk saat musuh melee sedang menyerang untuk maksimalkan counter-punch.' },
  ],
};
