import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'phoveus',
  name: 'Phoveus',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter jungler dengan kemampuan mencuri kecepatan gerak musuh dan area fear yang menakuti hero sekitar. Kuat memburu carry yang mencoba kabur.',
  strongAgainst: ['miya'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'antique-cuirass', 'blade-of-despair', 'immortality'],
      note: 'Item hybrid tank-damage supaya bisa mengejar sekaligus bertahan lama di fight.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih timing curi speed untuk mengejar musuh.' },
    { minute: 4, action: 'Gank lane dengan area fear untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang mengejar carry musuh.' },
    { minute: 14, action: 'Split push atau bantu rotasi grup tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: area fear ke carry musuh yang mencoba kabur, kejar dengan speed curian.' },
  ],
};
