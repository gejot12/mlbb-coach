import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'kalea',
  name: 'Kalea',
  roles: ['support', 'fighter'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support-fighter hybrid dengan kemampuan buff ally dan tetap punya damage combo sendiri. Fleksibel untuk role roam yang agresif.',
  strongAgainst: ['karina'],
  weakAgainst: ['eudora'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'antique-cuirass', 'immortality', 'athenas-shield'],
      note: 'Item hybrid tank-utility supaya tetap bisa buff ally sambil tahan lama di fight.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, mulai buff ally untuk trade lebih menguntungkan.' },
    { minute: 4, action: 'Roam bantu lane lain dengan buff dan combo damage sendiri.' },
    { minute: 9, action: 'Kontrol turtle, buff tim untuk menang kontes damage.' },
    { minute: 14, action: 'Selalu dekat carry utama, siap buff sebelum trade besar.' },
    { minute: 19, action: 'Teamfight: buff ally kunci sebelum fight, ikut damage combo sendiri.' },
  ],
};
