import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'nolan',
  name: 'Nolan',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan dash dimensi yang sulit dilacak dan burst combo cepat. Sangat efektif memburu mage/marksman squishy di belakang.',
  strongAgainst: ['pharsa', 'valentina'],
  weakAgainst: ['akai'],
  synergizesWith: ['selena'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['raptor-machete', 'blade-of-despair', 'berserkers-fury', 'endless-battle', 'malefic-roar', 'windtalker'],
      note: 'Fokus penetration dan critical supaya combo dimensi langsung menghabisi target squishy.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih pola dash dimensi untuk mobility maksimal.' },
    { minute: 4, action: 'Gank lane setelah combo burst tersedia, incar target paling lemah.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Split push atau bantu rotasi tergantung siapa yang paling mudah di-snowball.' },
    { minute: 18, action: 'Teamfight: masuk dari sisi tak terduga lewat dash dimensi ke backline musuh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Dimensional Journey',
      description:
        'Setelah menggunakan skill, basic attack berikutnya memberi damage tambahan dan sedikit heal ke Nolan.',
    },
    {
      type: 'skill1',
      name: 'Dimension Blade',
      description:
        'Melesat cepat menembus dimensi ke arah yang dipilih, memberi damage ke musuh yang dilewati.',
    },
    {
      type: 'skill2',
      name: 'Vanish',
      description:
        'Nolan menghilang sesaat ke dimensi lain, sulit dilacak musuh dan bisa mengatur ulang posisi combo berikutnya.',
    },
    {
      type: 'ultimate',
      name: 'Dimensional Storm',
      description:
        'Melancarkan rentetan dash-serangan cepat berpindah dimensi ke target yang dipilih, memberi damage besar berturut-turut sebagai combo eksekusi utama.',
    },
  ],
};
