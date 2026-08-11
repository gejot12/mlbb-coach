import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'marcel',
  name: 'Marcel',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'hard',
  summary:
    'Support roam dengan area-freeze yang mengunci pergerakan musuh dalam radius tertentu, plus ultimate teamfight yang mengubah arah pertarungan.',
  strongAgainst: ['zilong'],
  weakAgainst: ['pharsa'],
  synergizesWith: ['atlas'],
  builds: [
    {
      label: 'Core Support',
      itemSlugs: ['arcane-boots', 'enchanted-talisman', 'concentrated-energy', 'athenas-shield', 'divine-glaive'],
      note: 'Cooldown reduction penting supaya area-freeze bisa dipakai lebih sering.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, cari peluang area-freeze untuk trade menguntungkan.' },
    { minute: 4, action: 'Roam bantu lane lain dengan area-freeze untuk kunci gank.' },
    { minute: 9, action: 'Kontrol turtle, simpan ultimate untuk kontes besar.' },
    { minute: 14, action: 'Selalu siap engage duluan saat rotasi grup dengan tim.' },
    { minute: 19, action: 'Teamfight: area-freeze formasi musuh sebelum tim sendiri masuk penuh.' },
  ],
};
