import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'roger',
  name: 'Roger',
  roles: ['marksman', 'fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter-marksman shapeshifter yang bisa berubah jadi serigala untuk burst melee. Fleksibel farm jungle sekaligus damage dealer jarak jauh.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['raptor-machete', 'rapid-boots', 'berserkers-fury', 'blade-of-despair', 'wind-of-nature'],
      note: 'Build hybrid crit-penetration supaya kuat di kedua mode manusia dan serigala.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle di mode manusia untuk jarak aman.' },
    { minute: 4, action: 'Gank lane dengan transformasi serigala untuk burst combo.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu carry musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: transformasi serigala untuk finishing target HP rendah.' },
  ],
};
