import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'diggie',
  name: 'Diggie',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support roam dengan kemampuan purify area lewat ultimate, menghilangkan crowd control dari seluruh tim. Sangat kuat lawan tim yang mengandalkan CC combo.',
  strongAgainst: ['khufra', 'franco'],
  weakAgainst: ['karrie'],
  synergizesWith: ['beatrix', 'harith'],
  builds: [
    {
      label: 'Core Support',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'athenas-shield', 'cursed-helmet', 'dominance-ice'],
      note: 'Tough Boots memperkuat resistensi CC Diggie sendiri sebelum sempat purify tim.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, gunakan telur untuk cek area rawan gank.' },
    { minute: 4, action: 'Roam bantu lane lain, simpan purify untuk momen kritis.' },
    { minute: 8, action: 'Kontrol vision objective, siap purify combo CC musuh saat kontes turtle.' },
    { minute: 13, action: 'Dekat carry utama tim, waspada combo CC musuh yang mengincar carry.' },
    { minute: 18, action: 'Teamfight: aktifkan ultimate purify tepat sebelum/saat musuh melancarkan combo CC utama.' },
  ],
};
