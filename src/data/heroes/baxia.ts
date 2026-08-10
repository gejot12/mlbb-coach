import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'baxia',
  name: 'Baxia',
  roles: ['tank'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Tank jungler dengan shield yang menyerap damage sekitar dan slow area lewat ultimate. Kuat menahan dive physical, jadi salah satu jungler tank paling stabil di meta.',
  strongAgainst: ['zilong', 'alucard'],
  weakAgainst: ['lunox', 'valentina'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['tough-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'athenas-shield', 'cursed-helmet'],
      note: 'Shield Baxia lebih efektif dengan HP dan hybrid defense tinggi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle, manfaatkan shield untuk farm lebih aman dari counter-jungle.' },
    { minute: 4, action: 'Gank lane dengan slow area dari ultimate untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle, shield membantu menang kontes damage race.' },
    { minute: 14, action: 'Jadi frontline saat grouping, serap damage physical burst musuh.' },
    { minute: 19, action: 'Teamfight: berdiri di depan carry, gunakan ultimate untuk slow target priority.' },
  ],
};
