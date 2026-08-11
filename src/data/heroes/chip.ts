import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'chip',
  name: 'Chip',
  roles: ['tank', 'support'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Tank-support robot dengan kemampuan mengunci dan menyerap serangan musuh. Kuat melindungi carry dari fokus dive assassin.',
  strongAgainst: ['karina'],
  weakAgainst: ['pharsa'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'antique-cuirass', 'immortality', 'athenas-shield'],
      note: 'Hybrid defense supaya bisa menyerap serangan untuk carry secara efektif.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, mulai kunci vision area rawan gank.' },
    { minute: 4, action: 'Roam bantu lane lain, kunci musuh yang mengganggu carry.' },
    { minute: 9, action: 'Kontrol turtle, siap serap serangan saat kontes objective.' },
    { minute: 14, action: 'Selalu dekat carry utama, siap lindungi dari dive assassin.' },
    { minute: 19, action: 'Teamfight: kunci/serap serangan ke carry musuh yang paling berbahaya.' },
  ],
};
