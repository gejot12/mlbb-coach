import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'selena',
  name: 'Selena',
  roles: ['assassin', 'mage'],
  lanes: ['jungle', 'roam'],
  difficulty: 'hard',
  summary:
    'Assassin-mage hybrid dengan dua mode: Abyssal (roam, jebakan CC) dan Eve (assassin, burst combo). Sangat fleksibel untuk pick-off maupun roam kontrol.',
  strongAgainst: ['pharsa', 'zhuxin'],
  weakAgainst: ['atlas'],
  synergizesWith: ['nolan'],
  builds: [
    {
      label: 'Core Burst (Mode Eve)',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'lightning-truncheon', 'genius-wand', 'divine-glaive'],
      note: 'Build magic damage untuk mode Eve; mode Abyssal lebih ke item support/roam kalau dipakai full roam.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Pilih mode sesuai kebutuhan tim: Abyssal untuk roam vision, Eve untuk jungle/burst.' },
    { minute: 4, action: 'Pasang jebakan di titik rawan gank atau cari pick-off dengan mode Eve.' },
    { minute: 9, action: 'Kontrol turtle dengan bantuan jebakan CC untuk menang kontes.' },
    { minute: 14, action: 'Terus cari peluang pick-off ke carry musuh yang lengah.' },
    { minute: 19, action: 'Teamfight: buka fight dengan CC dari jebakan, lanjut burst combo mode Eve.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Abyss Walker',
      description:
        'Selena bisa berganti antara mode Abyssal (support roam dengan jebakan CC) dan mode Eve (assassin burst), masing-masing mengubah gaya bermainnya.',
    },
    {
      type: 'skill1',
      name: 'Abyssal Trap / Eve Blade',
      description:
        'Dalam mode Abyssal memasang jebakan tersembunyi yang men-stun musuh yang menginjaknya; dalam mode Eve melempar pisau memberi damage.',
    },
    {
      type: 'skill2',
      name: 'Entangling Vine',
      description:
        'Menembakkan sulur ke target garis lurus yang mengikat dan menarik musuh pertama yang terkena mendekat ke Selena.',
    },
    {
      type: 'ultimate',
      name: 'Abyssal Ritual / Fatal Blade',
      description:
        'Dalam mode Abyssal memasang banyak jebakan sekaligus di area luas; dalam mode Eve melesat teleport ke target dan mengeksekusinya dengan damage besar.',
    },
  ],
};
