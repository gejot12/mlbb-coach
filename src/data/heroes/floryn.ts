import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'floryn',
  name: 'Floryn',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'easy',
  summary:
    'Support roam dengan heal yang scaling dari gold carry yang dilindungi, membuat prioritas mengikuti satu carry utama sangat penting.',
  strongAgainst: ['aulus'],
  weakAgainst: ['valentina'],
  synergizesWith: ['wanwan'],
  builds: [
    {
      label: 'Core Support',
      itemSlugs: ['arcane-boots', 'enchanted-talisman', 'concentrated-energy', 'clock-of-destiny', 'athenas-shield'],
      note: 'Item yang menambah gold/mana membantu heal Floryn scaling lebih cepat.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tempel gold laner, beri heal sebanyak mungkin untuk trade menang.' },
    { minute: 4, action: 'Ikuti carry pindah lane, jangan tinggalkan carry sendirian.' },
    { minute: 9, action: 'Kontrol turtle bersama carry, heal terus untuk menang damage race.' },
    { minute: 14, action: 'Selalu menempel carry utama saat rotasi grup.' },
    { minute: 19, action: 'Teamfight: fokus heal carry yang paling banyak deal damage.' },
  ],
};
