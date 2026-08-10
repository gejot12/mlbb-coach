import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'valentina',
  name: 'Valentina',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage mid unik yang bisa mencuri ultimate hero musuh lewat skill-nya. Sangat kuat menyamai atau membalikkan keunggulan combo ultimate lawan.',
  strongAgainst: ['argus'],
  weakAgainst: ['saber'],
  synergizesWith: ['atlas'],
  builds: [
    {
      label: 'Core Poke/Burst',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'lightning-truncheon', 'genius-wand', 'divine-glaive'],
      note: 'Fokus damage item standar mage, fleksibilitas datang dari ultimate curian bukan build khusus.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, perhatikan ultimate hero musuh yang bisa dicuri.' },
    { minute: 4, action: 'Rotasi gank dengan ultimate curian untuk efek kejut.' },
    { minute: 9, action: 'Kontrol objective, gunakan ultimate curian sesuai kebutuhan situasi.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di belakang sebelum combo utama siap.' },
    { minute: 19, action: 'Teamfight: kombinasikan skill sendiri dengan ultimate curian untuk burst maksimal.' },
  ],
};
