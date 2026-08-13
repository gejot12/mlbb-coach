import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'xavier',
  name: 'Xavier',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage mid dengan gerbang dimensi yang bisa dipindah untuk poke fleksibel. Sangat kuat menghukum komposisi musuh yang berkumpul.',
  strongAgainst: ['miya'],
  weakAgainst: ['nolan'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Poke',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'lightning-truncheon', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny bagus untuk sustain mana dan scaling magic power di game panjang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih posisi gerbang dimensi untuk poke.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan poke gerbang dimensi.' },
    { minute: 9, action: 'Kontrol objective dari jarak jauh, hindari kontak langsung.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang.' },
    { minute: 19, action: 'Teamfight: gerbang dimensi ke formasi musuh yang berkumpul untuk burst maksimal.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Transcendence',
      description:
        'Skill Xavier yang mengenai musuh memberinya tambahan kecepatan gerak dan mengisi charge energi; pada charge penuh, cooldown skill berikutnya berkurang signifikan.',
    },
    {
      type: 'skill1',
      name: 'Infinite Extension',
      description:
        'Menembakkan peluru mistis yang menembus musuh yang dilewati; jarak tembaknya bertambah setiap kali mengenai musuh atau Mystic Barrier miliknya.',
    },
    {
      type: 'skill2',
      name: 'Mystic Field',
      description:
        'Memunculkan gerbang/barrier mistis yang bisa dipindah posisinya; musuh yang menyentuhnya kena damage dan slow, sementara sekutu mendapat bonus kecepatan gerak.',
    },
    {
      type: 'ultimate',
      name: 'Dawning Light',
      description:
        'Melepaskan berkas cahaya mistis melintasi map yang memberi damage besar ke semua musuh yang dilewatinya, sekaligus memicu efek Transcendence.',
    },
  ],
};
