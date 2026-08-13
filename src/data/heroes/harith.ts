import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'harith',
  name: 'Harith',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage mobile dengan blink berulang lewat ultimate. Kuat mengalahkan fighter melee lewat kontrol jarak, rentan kalau kena hard lockdown.',
  strongAgainst: ['yu-zhong', 'alucard'],
  weakAgainst: ['khufra'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Poke/Mobility',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'lightning-truncheon', 'genius-wand', 'divine-glaive'],
      note: 'Kombinasi damage item yang membuat combo blink-nya tetap mematikan di semua fase game.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane sambil latih timing blink untuk hindari skillshot musuh.' },
    { minute: 4, action: 'Rotasi ke side lane menggunakan mobility ultimate untuk bantu kill.' },
    { minute: 9, action: 'Kontrol map luas berkat mobility, bantu banyak lane bergantian.' },
    { minute: 14, action: 'Grouping dengan tim, tetap jaga jarak aman dari CC musuh.' },
    { minute: 19, action: 'Teamfight: poke dari luar jangkauan, masuk-keluar cepat untuk burst target.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Wormhole',
      description:
        'Menggunakan skill memberi stack blink instan yang bisa dipakai untuk berpindah tempat singkat dalam jangkauan pendek.',
    },
    {
      type: 'skill1',
      name: 'Wave',
      description:
        'Melepaskan gelombang energi di area sekitar Harith, memberi damage ke semua musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Wormhole Blink',
      description:
        'Berteleportasi instan ke lokasi yang dipilih dalam jangkauan pendek, dipakai untuk mengejar atau kabur.',
    },
    {
      type: 'ultimate',
      name: 'Wormhole Vortex',
      description:
        'Membuka pusaran di area target yang menarik musuh di sekitarnya dan memberi damage berkelanjutan selama efek aktif.',
    },
  ],
};
