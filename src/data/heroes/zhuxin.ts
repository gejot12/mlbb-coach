import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'zhuxin',
  name: 'Zhuxin',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan damage campuran yang efektif menembus tank tebal. Kuat lawan komposisi full-tank, tapi rentan kalau di-dive langsung.',
  strongAgainst: ['atlas', 'baxia'],
  weakAgainst: ['nolan', 'saber'],
  synergizesWith: ['minotaur'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Genius Wand dan Divine Glaive penting untuk menembus resistance tank tinggi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane aman, jaga jarak dari kontak langsung.' },
    { minute: 4, action: 'Rotasi bantu lane lain setelah combo pertama siap.' },
    { minute: 9, action: 'Poke objective dari jarak jauh, hindari zona dive musuh.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di belakang formasi.' },
    { minute: 19, action: 'Teamfight: fokus tank/frontline musuh yang biasanya sulit ditembus mage lain.' },
  ],
};
