import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'sun',
  name: 'Sun',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter jungler dengan clone yang bisa farm lane sendirian, memberi tekanan map yang besar. Kuat menekan split lane musuh yang lemah.',
  strongAgainst: ['miya'],
  weakAgainst: ['pharsa'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Split Push',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature'],
      note: 'Attack speed dan sustain penting karena Sun sering bertarung sambil clone tetap farm lane lain.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle sambil kirim clone ke lane yang lemah untuk tekanan map.' },
    { minute: 4, action: 'Gank lane lain sambil clone terus farm/push lane sendirian.' },
    { minute: 9, action: 'Kontrol turtle, manfaatkan clone untuk split push simultan.' },
    { minute: 14, action: 'Terus tekan map dengan clone sambil tim rotasi objective lain.' },
    { minute: 19, action: 'Teamfight: gabung fight utama sambil clone tetap push turret di lane lain.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Instinct',
      description:
        'Saat HP Sun berada di bawah ambang tertentu, ia mendapat peluang menghindari basic attack musuh sepenuhnya.',
    },
    {
      type: 'skill1',
      name: 'Rising Cudgel',
      description:
        'Melompat ke area target dan menghantamkan tongkat ke tanah, memberi damage ke musuh di sekitar titik jatuh.',
    },
    {
      type: 'skill2',
      name: 'Cudgel Field',
      description:
        'Memutar tongkat membentuk pusaran di sekitarnya, menyedot musuh mendekat sambil memberi damage berulang.',
    },
    {
      type: 'ultimate',
      name: 'Clone Formation',
      description:
        'Menciptakan beberapa clone yang menyebar dan menyerang musuh secara independen, sangat efektif untuk split push atau mengecoh fokus musuh.',
    },
  ],
};
