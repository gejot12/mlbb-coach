import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'joy',
  name: 'Joy',
  roles: ['assassin'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Assassin dengan shield-dash yang bisa memantul dan menyerap skillshot musuh. Sangat sulit ditangkap, kuat lawan mage yang mengandalkan skillshot.',
  strongAgainst: ['eudora'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['arcane-boots', 'lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive'],
      note: 'Build magic damage karena skill Joy scaling dari magic power meski role assassin.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih rangkaian dash-pantul untuk mobilitas maksimal.' },
    { minute: 4, action: 'Rotasi gank dengan dash-pantul untuk elemen kejutan.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 14, action: 'Snowball dengan terus memburu mage/marksman musuh.' },
    { minute: 19, action: 'Teamfight: dash-pantul masuk ke backline musuh, serap skillshot di jalan.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Dimensional Space',
      description:
        'Menggunakan skill memberi Joy stack shield yang bisa menyerap sejumlah damage, termasuk dari skillshot musuh.',
    },
    {
      type: 'skill1',
      name: 'Sword Trick',
      description:
        'Melesat ke arah target sambil meninggalkan jejak pedang, memberi damage ke musuh yang dilewati.',
    },
    {
      type: 'skill2',
      name: 'Dimensional Waltz',
      description:
        'Berteleportasi instan ke salah satu jejak pedang yang sudah ditinggalkan sebelumnya, dipakai untuk mobilitas cepat masuk-keluar combo.',
    },
    {
      type: 'ultimate',
      name: "Butterfly's Whisper",
      description:
        'Melancarkan rangkaian tebasan cepat berpindah antar jejak pedang ke banyak musuh sekaligus, memberi damage besar dalam waktu singkat.',
    },
  ],
};
