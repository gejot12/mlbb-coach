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
  skills: [
    {
      type: 'passive',
      name: 'Fixed Attack',
      description:
        'Basic attack Hanabi memberi bonus damage tetap tambahan di luar damage normal, membuat trade jangka panjangnya lebih konsisten.',
    },
    {
      type: 'skill1',
      name: 'Shuriken Coalition',
      description:
        'Melempar shuriken yang memantul dari satu musuh ke musuh terdekat lainnya, memberi damage ke banyak target sekaligus.',
    },
    {
      type: 'skill2',
      name: 'Antitank Grenade',
      description:
        'Melempar granat ke area yang dipilih, memberi damage sekaligus mengurangi defense fisik musuh yang terkena.',
    },
    {
      type: 'ultimate',
      name: 'Blossom Dance',
      description:
        'Melepaskan rentetan anak panah ke sekitar dirinya sambil kebal terhadap crowd control selama durasi aktif, cocok untuk bertahan di tengah teamfight.',
    },
  ],
};
