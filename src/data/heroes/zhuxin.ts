import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'zhuxin',
  name: 'Zhuxin',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan damage campuran yang efektif menembus tank tebal. Kuat lawan komposisi full-tank, tapi rentan kalau di-dive langsung.',
  strongAgainst: ['atlas', 'baxia'],
  weakAgainst: ['nolan', 'saber'],
  synergizesWith: ['minotaur'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Genius Wand dan Divine Glaive penting untuk menembus resistance tank tinggi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane aman, jaga jarak dari kontak langsung.' },
    { minute: 4, action: 'Rotasi bantu lane lain setelah combo pertama siap.' },
    { minute: 9, action: 'Poke objective dari jarak jauh, hindari zona dive musuh.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di belakang formasi.' },
    { minute: 19, action: 'Teamfight: fokus tank/frontline musuh yang biasanya sulit ditembus mage lain.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Crimson Butterflies',
      description:
        'Setiap kali Zhuxin channel Lantern Flare, mana yang terpakai dikonversi menjadi kupu-kupu crimson yang mengikuti Spirit Lantern-nya, dan menghilang secara bertahap sambil mengembalikan sebagian mana saat channel berhenti.',
    },
    {
      type: 'skill1',
      name: 'Fluttering Grace',
      description:
        'Memberi damage ke semua musuh di area berbentuk kipas di depan Zhuxin, menerapkan stack Soul Snare, memperlambat musuh yang terkena, dan memberi Zhuxin sendiri bonus movement speed sesaat.',
    },
    {
      type: 'skill2',
      name: 'Lantern Flare',
      description:
        'Ditahan untuk menggerakkan Spirit Lantern yang terus memberi damage dan menumpuk Soul Snare ke musuh di sekitarnya; saat dilepas, semua musuh yang tertangkap dilempar ke lokasi target dan terkena damage besar berbasis HP maksimal mereka.',
    },
    {
      type: 'ultimate',
      name: 'Crimson Beacon',
      description:
        'Zhuxin berpindah ke lokasi target dan memasuki mode terbang dengan shield pelindung, memberi damage berkelanjutan ke musuh di sekitarnya sambil terus menumpuk Soul Snare.',
    },
  ],
};
