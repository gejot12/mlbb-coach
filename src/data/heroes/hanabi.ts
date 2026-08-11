import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'hanabi',
  name: 'Hanabi',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman dengan shuriken yang memantul ke musuh sekitar dan ultimate yang memberi kekebalan CC sementara. Sangat kuat lawan tim dengan banyak CC chain.',
  strongAgainst: ['grock'],
  weakAgainst: ['saber'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Crit',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair', 'windtalker'],
      note: 'Build crit standar, ultimate CC immunity sudah memberi keamanan ekstra saat teamfight.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, manfaatkan shuriken pantul untuk clear cepat.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective dengan dukungan tim.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi siap aktifkan ultimate kalau di-CC.' },
    { minute: 20, action: 'Teamfight: aktifkan ultimate CC immunity saat masuk kontak, terus damage lewat pantulan shuriken.' },
  ],
};
