import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'uranus',
  name: 'Uranus',
  roles: ['tank'],
  lanes: ['exp'],
  difficulty: 'easy',
  summary:
    'Tank exp lane dengan regenerasi HP masif yang membuatnya nyaris tidak bisa dikalahkan 1v1 di lane. Sangat sulit ditekan oleh fighter biasa.',
  strongAgainst: ['thamuz'],
  weakAgainst: ['zhuxin'],
  synergizesWith: ['floryn'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['warrior-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'athenas-shield'],
      note: 'HP tinggi memaksimalkan regenerasi passive, membuat Uranus makin sulit dibunuh.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tahan exp lane sendirian, regenerasi HP membuatnya nyaris tak terkalahkan solo.' },
    { minute: 4, action: 'Bertahan tanpa bantuan, beri sinyal jungler fokus lane lain.' },
    { minute: 9, action: 'Mulai rotasi bantu kontrol turtle setelah exp lane aman.' },
    { minute: 14, action: 'Jadi frontline utama saat grouping, tahan damage sebanyak mungkin.' },
    { minute: 19, action: 'Teamfight: berdiri di depan formasi, serap damage untuk carry di belakang.' },
  ],
};
