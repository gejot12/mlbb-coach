import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'atlas',
  name: 'Atlas',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'hard',
  summary:
    'Tank roam dengan ultimate global yang menarik seluruh musuh sekitar target ke satu titik. Sangat kuat membuka teamfight lima lawan lima sekaligus.',
  strongAgainst: ['miya', 'claude'],
  weakAgainst: ['esmeralda'],
  synergizesWith: ['zhuxin'],
  builds: [
    {
      label: 'Core Engage',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'antique-cuirass', 'immortality', 'athenas-shield', 'cursed-helmet'],
      note: 'Cooldown reduction penting supaya ultimate global bisa dipakai lebih sering.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, cari vision untuk persiapan ultimate global nanti.' },
    { minute: 4, action: 'Roam bantu lane lain, simpan ultimate untuk momen krusial.' },
    { minute: 9, action: 'Kontrol vision sekitar objective, siap tarik musuh yang overextend.' },
    { minute: 14, action: 'Selalu dekat carry, pastikan posisi aman sebelum inisiasi ultimate.' },
    { minute: 19, action: 'Teamfight: buka fight dari jarak jauh dengan ultimate global ke carry musuh.' },
  ],
};
