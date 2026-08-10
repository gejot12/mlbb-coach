import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'gloo',
  name: 'Gloo',
  roles: ['tank'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Tank exp lane dengan kemampuan menempel ke musuh dan menyerap sebagian damage mereka. Sangat mengganggu hero melee yang mengandalkan basic attack.',
  strongAgainst: ['zilong'],
  weakAgainst: ['granger'],
  synergizesWith: ['floryn'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['warrior-boots', 'antique-cuirass', 'dominance-ice', 'immortality', 'athenas-shield'],
      note: 'Fokus HP dan physical defense supaya efek menempel makin menyulitkan musuh melee.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tahan exp lane, gunakan skill menempel untuk mengganggu farm musuh.' },
    { minute: 4, action: 'Rotasi bantu lane lain begitu exp lane aman.' },
    { minute: 9, action: 'Kontrol turtle, tempel carry musuh untuk mengurangi damage mereka.' },
    { minute: 14, action: 'Jadi frontline saat grouping, ganggu basic attacker musuh terus-menerus.' },
    { minute: 19, action: 'Teamfight: tempel marksman/fighter utama musuh untuk melumpuhkan damage mereka.' },
  ],
};
