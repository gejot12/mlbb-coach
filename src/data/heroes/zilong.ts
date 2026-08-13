import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'zilong',
  name: 'Zilong',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'easy',
  summary:
    'Fighter jungler klasik dengan attack speed tinggi dan mobilitas dash. Kuat split push dan memburu backline squishy, tapi rentan lawan tank sticky.',
  strongAgainst: ['claude'],
  weakAgainst: ['esmeralda'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Attack Speed',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature'],
      note: 'Endless Battle memberi sustain dan attack speed sekaligus, cocok gaya bermain agresif Zilong.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat berkat attack speed tinggi.' },
    { minute: 4, action: 'Gank lane dengan dash combo untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle atau mulai split push exp/gold lane musuh.' },
    { minute: 14, action: 'Terus split push sambil tim rotasi objective lain.' },
    { minute: 19, action: 'Teamfight: masuk dari flank untuk memburu backline squishy musuh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Purity of Freedom',
      description:
        'Setiap kali menggunakan skill, Zilong mendapat imunitas singkat terhadap efek slow, membuatnya sulit dikejar atau dikunci.',
    },
    {
      type: 'skill1',
      name: 'Supreme Wushu',
      description:
        'Berputar menyerang dengan tombak ke semua arah, memberi damage ke musuh di sekitarnya sekaligus bagus untuk clear minion.',
    },
    {
      type: 'skill2',
      name: 'Chaos Refresher',
      description:
        'Melesat maju menerjang musuh di jalurnya, memberi damage dan membantu mobilitas untuk mengejar atau kabur.',
    },
    {
      type: 'ultimate',
      name: 'Dance of Blades',
      description:
        'Melancarkan rentetan serangan cepat berturut-turut ke musuh di sekitarnya, memberi damage tinggi sambil menyembuhkan diri dari setiap hit.',
    },
  ],
};
