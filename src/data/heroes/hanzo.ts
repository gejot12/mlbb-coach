import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'hanzo',
  name: 'Hanzo',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan mode roh yang bisa menembus dinding dan burst combo tinggi. Sangat efektif memburu backline squishy lewat rute tak terduga.',
  strongAgainst: ['layla'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'malefic-roar', 'endless-battle', 'berserkers-fury', 'wind-of-nature'],
      note: 'Fokus penetration dan burst karena combo mode roh Hanzo perlu damage instan tinggi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih rute mode roh tembus dinding.' },
    { minute: 4, action: 'Gank lane lewat dinding dengan mode roh untuk elemen kejutan.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu carry musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk lewat dinding ke backline musuh dengan mode roh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Ninjutsu: Mounting Soul',
      description:
        'Membunuh atau membantu membunuh musuh memberi Hanzo soul; soul ini dipakai untuk mengaktifkan ultimate mode roh tanpa menunggu cooldown penuh.',
    },
    {
      type: 'skill1',
      name: 'Ninjutsu: Wind Blade',
      description:
        'Melempar bilah bulan sabit garis lurus ke depan, memberi damage ke semua musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Ninjutsu: Art of Enfeeblement',
      description:
        'Menandai musuh di area yang dipilih, memberi damage sekaligus melemahkan mereka untuk sesaat.',
    },
    {
      type: 'ultimate',
      name: 'Spirit of Fox God',
      description:
        'Mengubah Hanzo menjadi wujud roh yang bisa menembus dinding dan kebal crowd control, memberi damage saat masuk dan keluar dari mode ini.',
    },
  ],
};
