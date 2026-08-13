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
  skills: [
    {
      type: 'passive',
      name: 'Combo Mastery',
      description:
        'Setiap tiga basic attack berturut-turut, serangan ketiga Saber memberi damage tambahan yang cukup besar ke musuh.',
    },
    {
      type: 'skill1',
      name: 'Triple Slash',
      description:
        'Melesat menembus ke arah yang dipilih sambil menebas semua musuh yang dilewati, memberi damage.',
    },
    {
      type: 'skill2',
      name: 'Shadow Assault',
      description:
        'Melancarkan tebasan cepat ke depan, memberi damage ke musuh dalam jangkauan pendek di depan Saber.',
    },
    {
      type: 'ultimate',
      name: 'Killing Blade',
      description:
        'Mengunci satu target musuh dan menyerangnya beruntun dengan rentetan tebasan cepat, memberi damage besar sambil kebal dari sebagian efek kontrol selama durasi combo.',
    },
  ],
};
