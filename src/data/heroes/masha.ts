import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'masha',
  name: 'Masha',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'easy',
  summary:
    'Fighter jungler dengan damage berbasis persentase HP maksimal musuh, membuatnya sangat efektif membantai tank tebal.',
  strongAgainst: ['baxia', 'akai', 'atlas'],
  weakAgainst: ['minsitthar'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'blade-of-despair', 'endless-battle', 'wind-of-nature', 'immortality'],
      note: 'Attack speed dan sustain lebih penting daripada penetration karena damage-nya persentase.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, manfaatkan damage persentase untuk bunuh monster besar lebih efisien.' },
    { minute: 4, action: 'Gank lane dengan fokus target tank/fighter musuh yang HP-nya besar.' },
    { minute: 9, action: 'Kontrol turtle, damage persentase membantu menang kontes objective.' },
    { minute: 14, action: 'Split push atau cari 1v1 lawan hero HP tebal.' },
    { minute: 19, action: 'Teamfight: fokus tank/frontline musuh, biarkan tim lain handle backline.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Undying',
      description:
        'Masha meregenerasi HP secara pasif saat di luar combat dan mendapat bonus movement speed saat bergerak bebas.',
    },
    {
      type: 'skill1',
      name: 'Rolling Attack',
      description:
        'Menggulingkan diri ke depan menabrak musuh, memberi damage yang scaling dengan persentase HP maksimal target — efektif lawan tank.',
    },
    {
      type: 'skill2',
      name: 'Totem',
      description:
        'Menancapkan totem di tanah yang memberi buff untuk Masha selama dia berada di dekatnya.',
    },
    {
      type: 'ultimate',
      name: 'Wild Punch',
      description:
        'Melepaskan rentetan pukulan cepat ke semua musuh di sekitarnya, memberi damage berbasis persentase HP maksimal mereka.',
    },
  ],
};
