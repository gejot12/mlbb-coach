import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'yi-sun-shin',
  name: 'Yi Sun-shin',
  roles: ['marksman', 'assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Marksman-assassin hybrid dengan clone decoy yang bisa dipakai untuk mengecoh musuh dan pick-off dari sudut tak terduga.',
  strongAgainst: ['layla'],
  weakAgainst: ['akai'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Crit',
      itemSlugs: ['raptor-machete', 'rapid-boots', 'berserkers-fury', 'blade-of-despair', 'wind-of-nature'],
      note: 'Build crit standar marksman, clone decoy membantu positioning aman untuk damage.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle, latih penggunaan clone decoy untuk mengecoh musuh.' },
    { minute: 4, action: 'Gank lane dengan bantuan clone untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off dari sudut tak terduga.' },
    { minute: 14, action: 'Split push atau bantu rotasi grup tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: gunakan clone untuk mengecoh fokus musuh sambil damage dari posisi aman.' },
  ],
};
