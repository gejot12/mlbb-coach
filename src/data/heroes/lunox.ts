import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'lunox',
  name: 'Lunox',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan damage campuran chaos/order yang efektif menembus HP tinggi. Kuat lawan tank, tapi rentan di-dive assassin.',
  strongAgainst: ['tigreal', 'franco'],
  weakAgainst: ['fanny', 'ling'],
  synergizesWith: ['khufra'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['genius-wand', 'holy-crystal', 'lightning-truncheon', 'divine-glaive', 'concentrated-energy'],
      note: 'Genius Wand sangat efektif karena damage Lunox scaling dengan persentase HP musuh.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane dengan aman, jaga mana untuk combo ultimate.' },
    { minute: 4, action: 'Rotasi gank setelah dapat ultimate pertama untuk burst combo cepat.' },
    { minute: 8, action: 'Bantu kontrol turtle, posisikan diri jangan terlalu maju.' },
    { minute: 13, action: 'Grouping dengan tim, cari kesempatan burst tank musuh yang biasanya sulit ditembus mage lain.' },
    { minute: 18, action: 'Teamfight: tetap di belakang formasi, masuk setelah CC utama tim terpakai.' },
  ],
};
