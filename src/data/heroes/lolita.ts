import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'lolita',
  name: 'Lolita',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'easy',
  summary:
    'Tank roam dengan shield yang memblokir proyektil/skillshot musuh. Sangat kuat melindungi tim dari mage/marksman poke.',
  strongAgainst: ['miya'],
  weakAgainst: ['saber'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['tough-boots', 'antique-cuirass', 'immortality', 'athenas-shield', 'cursed-helmet'],
      note: 'Hybrid defense supaya shield anti-proyektil bisa dipakai untuk melindungi tim lebih lama.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, blokir poke musuh dengan shield.' },
    { minute: 4, action: 'Roam bantu lane lain, gunakan shield untuk melindungi ally dari poke.' },
    { minute: 9, action: 'Kontrol turtle, blokir skillshot musuh saat kontes objective.' },
    { minute: 14, action: 'Selalu dekat carry utama, siap blokir proyektil yang mengarah ke mereka.' },
    { minute: 19, action: 'Teamfight: posisikan shield di depan carry untuk blokir burst combo musuh.' },
  ],
};
