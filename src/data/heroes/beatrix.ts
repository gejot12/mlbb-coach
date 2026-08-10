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
};
