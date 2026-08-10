import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'esmeralda',
  name: 'Esmeralda',
  roles: ['mage', 'tank'],
  lanes: ['exp', 'jungle'],
  difficulty: 'medium',
  summary:
    'Mage-tank hybrid dengan shield yang menyerap damage berbasis persentase dan mengubahnya jadi energi ultimate. Sangat kuat lawan marksman basic-attack reliant.',
  strongAgainst: ['claude', 'granger'],
  weakAgainst: ['valentina'],
  synergizesWith: ['atlas'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'genius-wand', 'concentrated-energy', 'athenas-shield', 'divine-glaive'],
      note: 'Magic power tetap dibutuhkan karena damage ultimate scaling dari situ meski basisnya tank.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane atau clear jungle dengan shield untuk sustain aman.' },
    { minute: 4, action: 'Rotasi gank setelah shield dan ultimate cukup untuk burst.' },
    { minute: 9, action: 'Kontrol turtle, shield membantu menang damage race lawan marksman.' },
    { minute: 14, action: 'Jadi frontline saat grouping, serap basic attack musuh sebanyak mungkin.' },
    { minute: 19, action: 'Teamfight: masuk lebih dulu, ultimate saat shield sudah penuh terisi untuk burst maksimal.' },
  ],
};
