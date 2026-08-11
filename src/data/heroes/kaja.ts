import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'kaja',
  name: 'Kaja',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support-fighter roam dengan ultimate chain grab yang menarik satu carry musuh jauh dari timnya, bahkan menembus banyak crowd control immunity.',
  strongAgainst: ['miya'],
  weakAgainst: ['khufra'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Support',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'antique-cuirass', 'immortality', 'athenas-shield'],
      note: 'Hybrid tank-utility supaya bisa bertahan setelah masuk sendirian lewat ultimate grab.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, cari peluang stun awal untuk kill kecil.' },
    { minute: 4, action: 'Roam bantu lane lain, simpan ultimate untuk momen krusial.' },
    { minute: 9, action: 'Kontrol turtle, siap grab carry musuh yang overextend.' },
    { minute: 14, action: 'Selalu dekat carry utama, waspada carry musuh yang bisa di-grab.' },
    { minute: 19, action: 'Teamfight: grab carry musuh paling berbahaya, tarik jauh dari perlindungan tim mereka.' },
  ],
};
