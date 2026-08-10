import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'saber',
  name: 'Saber',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'easy',
  summary:
    'Assassin jungler klasik dengan ultimate yang mengunci satu target sepenuhnya. Sangat efektif memburu mage/marksman yang jadi ancaman utama tim musuh.',
  strongAgainst: ['zhuxin', 'valentina'],
  weakAgainst: ['akai'],
  synergizesWith: ['minotaur'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'malefic-roar', 'endless-battle', 'berserkers-fury', 'wind-of-nature'],
      note: 'Damage burst instan, prioritas penetration untuk memastikan target terkunci mati sebelum bisa dibantu tim.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, kenali target priority musuh sejak awal.' },
    { minute: 4, action: 'Gank lane dengan ultimate lock ke target paling berbahaya.' },
    { minute: 8, action: 'Kontrol turtle, terus cari peluang pick-off ke carry musuh.' },
    { minute: 13, action: 'Snowball dengan terus memburu target priority, hindari fight tanpa kill jelas.' },
    { minute: 18, action: 'Teamfight: kunci carry musuh paling berbahaya duluan sebelum fight utama dimulai.' },
  ],
};
