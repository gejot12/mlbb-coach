import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'harley',
  name: 'Harley',
  roles: ['mage', 'assassin'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage-assassin hybrid dengan teleport jangkauan pendek dan burst combo instan. Sangat efektif membunuh marksman/mage squishy dalam sekejap.',
  strongAgainst: ['miya'],
  weakAgainst: ['franco'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Fokus burst damage karena Harley mengandalkan combo instan dari teleport.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih akurasi teleport untuk combo burst.' },
    { minute: 4, action: 'Rotasi gank dengan combo teleport-burst untuk kill cepat.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 14, action: 'Grouping dengan tim, tunggu peluang burst combo penuh.' },
    { minute: 19, action: 'Teamfight: teleport ke backline musuh, burst combo secepat mungkin lalu kabur.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Void Escape',
      description:
        'Saat diam di tempat atau setelah beberapa saat tidak terkena damage, Harley masuk mode tak terlihat sesaat.',
    },
    {
      type: 'skill1',
      name: 'Space Rift',
      description:
        'Melempar kartu ke arah yang dipilih, memberi damage ke musuh yang terkena sekaligus memunculkan ilusi di titik jatuhnya.',
    },
    {
      type: 'skill2',
      name: 'Apparate',
      description:
        'Berteleportasi instan jarak pendek ke lokasi yang dipilih, dipakai untuk masuk cepat ke combo atau kabur dari bahaya.',
    },
    {
      type: 'ultimate',
      name: 'Pentakill',
      description:
        'Memanggil beberapa clone bayangan yang menyerang target secara bersamaan dalam waktu singkat, memberi burst damage besar — combo eksekusi utama.',
    },
  ],
};
