import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'beatrix',
  name: 'Beatrix',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'hard',
  summary:
    'Marksman fleksibel dengan beberapa senjata yang bisa ditukar sesuai kebutuhan fight. Salah satu mode senjatanya (Renault) sangat kuat lawan tank.',
  strongAgainst: ['belerick', 'tigreal'],
  weakAgainst: ['lancelot', 'hayabusa'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Build fleksibel karena Beatrix bisa ganti senjata sesuai kebutuhan burst atau sustained damage.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, kenali kapan harus pakai senjata mana untuk trade.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective dengan tetap waspada dive assassin.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi siap ganti senjata cepat kalau di-dive.' },
    { minute: 20, action: 'Teamfight: gunakan mode senjata anti-tank kalau lawan formasi tebal.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Weapon Master',
      description:
        'Beatrix bisa membawa dan menukar dua senjata sekaligus di tengah pertarungan, masing-masing punya karakteristik damage dan jangkauan berbeda.',
    },
    {
      type: 'skill1',
      name: 'Gluttony Wheel',
      description:
        'Menembakkan proyektil dari senjata yang sedang aktif ke arah musuh, memberi damage sesuai jenis senjata yang dipakai.',
    },
    {
      type: 'skill2',
      name: 'Ignition Charge',
      description:
        'Beatrix melempar bom yang meledak di area target, memberi damage ke semua musuh yang terkena ledakan.',
    },
    {
      type: 'ultimate',
      name: 'Nibiru Missile',
      description:
        'Meluncurkan rudal ke area yang dipilih dari jarak jauh, memberi damage besar ke musuh di area ledakan — efektif untuk zoning atau finishing.',
    },
  ],
};
