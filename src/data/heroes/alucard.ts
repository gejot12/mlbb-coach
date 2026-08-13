import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'alucard',
  name: 'Alucard',
  roles: ['fighter', 'assassin'],
  lanes: ['jungle', 'exp'],
  difficulty: 'easy',
  summary:
    'Fighter jungler dengan sustain tinggi lewat spell vamp dan Fission Wave. Kuat lawan mage squishy, lemah lawan CC berat.',
  strongAgainst: ['lunox'],
  weakAgainst: ['franco', 'tigreal', 'khufra'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'malefic-roar', 'immortality', 'wind-of-nature'],
      note: 'Endless Battle wajib untuk spell vamp, sisanya damage item sesuai kebutuhan lawan tank/marksman.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle mulai dari sisi yang aman, jaga HP dengan buff sustain.' },
    { minute: 3, action: 'Gank lane yang paling mudah kill setelah dapat level dan buff.' },
    { minute: 7, action: 'Rebutan turtle, gunakan ultimate untuk burst objective/hero.' },
    { minute: 12, action: 'Split push atau cari pick-off 1v1 ke hero squishy yang terisolasi.' },
    { minute: 17, action: 'Teamfight: masuk lewat flank, fokus target rentan sambil manfaatkan sustain.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Pain Embrace',
      description:
        'Alucard mendapat spell vamp berlebih yang dikonversi menjadi shield, membuatnya tahan lama saat trading terus-menerus.',
    },
    {
      type: 'skill1',
      name: 'Groundslicer',
      description:
        'Melemparkan pedang berputar ke depan yang bolak-balik, memberi damage ke musuh yang terkena dalam garis lurus.',
    },
    {
      type: 'skill2',
      name: 'Whirling Smash',
      description:
        'Alucard melompat ke target dan berputar menyerang musuh di sekitarnya, memberi damage area sambil mendekat cepat.',
    },
    {
      type: 'ultimate',
      name: 'Fission Wave',
      description:
        'Menembakkan gelombang energi garis lurus yang memberi damage besar, lalu Alucard langsung dash ke titik akhir gelombang tersebut.',
    },
  ],
};
