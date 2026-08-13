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
  skills: [
    {
      type: 'passive',
      name: 'Grace',
      description:
        'Rafaela mendapat bonus movement speed saat bergerak ke arah ally dengan HP rendah, membantunya cepat merespons ally yang butuh bantuan.',
    },
    {
      type: 'skill1',
      name: 'Illumination',
      description:
        'Melepaskan cahaya di area sekitar yang memberi heal ke ally dan memperlambat musuh yang terkena di dalamnya.',
    },
    {
      type: 'skill2',
      name: 'Wings of Radiance',
      description:
        'Rafaela terbang menembus ke arah yang dipilih, memberi damage ke musuh yang dilewati sekaligus reposisi cepat.',
    },
    {
      type: 'ultimate',
      name: 'Overflowing Sanctity',
      description:
        'Memberi movement speed besar ke semua ally di sekitar untuk sementara waktu, sangat berguna untuk inisiasi cepat maupun kabur bersama tim.',
    },
  ],
};
