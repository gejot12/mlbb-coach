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
  skills: [
    {
      type: 'passive',
      name: 'Dominator',
      description:
        'Setelah mengenai musuh dengan skill kedua, Valentina bisa menyalin dan menyimpan ultimate hero musuh tersebut untuk dipakai sendiri.',
    },
    {
      type: 'skill1',
      name: 'Frost Wave',
      description:
        'Melepaskan gelombang dingin berbentuk kerucut ke depan, memberi damage dan slow ke musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Illusive Gale',
      description:
        'Berteleportasi singkat ke arah yang dipilih sekaligus menandai target musuh untuk dicuri ultimate-nya.',
    },
    {
      type: 'ultimate',
      name: 'Doppelganger',
      description:
        'Melepaskan ultimate hasil curian dari hero musuh, efeknya bervariasi tergantung ultimate yang sedang disimpan.',
    },
  ],
};
