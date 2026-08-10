import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'rafaela',
  name: 'Rafaela',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'easy',
  summary:
    'Support roam dengan heal-slow area dan ultimate yang memberi movement speed besar ke tim. Sangat kuat menopang carry dalam trade berkelanjutan.',
  strongAgainst: ['zilong'],
  weakAgainst: ['saber'],
  synergizesWith: ['wanwan'],
  builds: [
    {
      label: 'Core Support',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'athenas-shield', 'immortality', 'concentrated-energy'],
      note: 'Prioritas cooldown reduction supaya heal-slow area bisa dipakai lebih sering.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, gunakan heal untuk menang trade lane.' },
    { minute: 4, action: 'Roam bantu lane lain, bawa sustain ke fight-fight kecil.' },
    { minute: 9, action: 'Kontrol turtle, heal area membantu tim menang damage race.' },
    { minute: 14, action: 'Selalu dekat carry utama, siap heal saat mereka jadi target.' },
    { minute: 19, action: 'Teamfight: aktifkan ultimate speed boost untuk inisiasi atau kabur cepat.' },
  ],
};
