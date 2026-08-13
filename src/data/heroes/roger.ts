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
  skills: [
    {
      type: 'passive',
      name: 'Man or Wolf',
      description:
        'Roger bisa berganti wujud antara manusia (marksman jarak jauh) dan serigala (fighter melee) kapan saja, masing-masing dengan gaya serang berbeda.',
    },
    {
      type: 'skill1',
      name: 'Wolf Strike',
      description:
        'Dalam wujud serigala, Roger menerkam ke arah target dengan cakar, memberi damage ke musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Howling',
      description:
        'Roger mengaum, mendapat bonus movement speed dan tambahan efek berdasarkan wujud yang sedang aktif.',
    },
    {
      type: 'ultimate',
      name: 'Wolf Transformation',
      description:
        'Berubah penuh menjadi serigala dengan bonus damage dan lifesteal besar, sangat efektif untuk memburu dan menghabisi target yang lemah.',
    },
  ],
};
