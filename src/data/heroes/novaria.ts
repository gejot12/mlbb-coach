import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'novaria',
  name: 'Novaria',
  roles: ['mage', 'support'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage-support hybrid dengan pod yang bisa ditempatkan untuk zoning, heal, atau damage area. Sangat fleksibel mengontrol tempo game lewat map.',
  strongAgainst: ['yin'],
  weakAgainst: ['zhuxin'],
  synergizesWith: ['atlas'],
  builds: [
    {
      label: 'Core Utility Mage',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'lightning-truncheon', 'concentrated-energy', 'divine-glaive'],
      note: 'Item hybrid damage-utility supaya pod tetap berguna sebagai zoning sekaligus damage.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, tempatkan pod di titik strategis untuk vision/zoning.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan pod sebagai zoning tambahan.' },
    { minute: 9, action: 'Kontrol objective dengan pod heal/damage sesuai kebutuhan tim.' },
    { minute: 14, action: 'Grouping dengan tim, sebar pod di jalur masuk musuh.' },
    { minute: 19, action: 'Teamfight: gunakan kombinasi pod untuk kontrol area sebelum fight utama.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Astral Chain',
      description:
        'Astral Sphere yang dipanggil Novaria terus memperlambat musuh di sekitarnya, memberi damage berbasis persentase HP maksimal saat meledak, dan memberi vision terhadap musuh yang terkena.',
    },
    {
      type: 'skill1',
      name: 'Astral Sphere',
      description:
        'Memanggil astral sphere ke lokasi target yang meledak setelah jeda singkat, memberi damage area sekaligus memperkuat efek slow di sekitarnya.',
    },
    {
      type: 'skill2',
      name: 'Astral Recall',
      description:
        'Memanggil astral sphere dari kejauhan lalu menariknya ke arah Novaria, memberi bonus movement speed dan kemampuan menembus terrain selama pergerakan.',
    },
    {
      type: 'ultimate',
      name: 'Astral Echo',
      description:
        'Melepaskan proyektil astral besar yang melesat melintasi map, memberi vision terhadap musuh yang terkena sekaligus damage besar saat mengenai target.',
    },
  ],
};
