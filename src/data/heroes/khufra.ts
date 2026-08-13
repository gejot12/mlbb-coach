import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'khufra',
  name: 'Khufra',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Tank dengan Bouncing Ball dan ultimate yang menghentikan dash/blink musuh (Speed of Light). Counter utama assassin mobile.',
  strongAgainst: ['fanny', 'ling', 'gusion'],
  weakAgainst: ['kagura'],
  synergizesWith: ['chou'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['tough-boots', 'antique-cuirass', 'dominance-ice', 'immortality', 'athenas-shield', 'cursed-helmet'],
      note: 'Tough Boots membantu Khufra tahan CC saat dia sendiri jadi target fokus.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, gunakan bola untuk poke/harass ringan.' },
    { minute: 4, action: 'Mulai rotasi cari peluang stun bola ke lane yang lemah.' },
    { minute: 9, action: 'Selalu simpan ultimate untuk hero mobile musuh (assassin/jungler dash).' },
    { minute: 14, action: 'Kontrol lord/turtle, posisikan diri di depan untuk stop dive musuh.' },
    { minute: 20, action: 'Teamfight: ultimate ke carry musuh yang paling mengandalkan dash untuk masuk/keluar.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Tough Guy',
      description:
        'Mengurangi durasi efek crowd control yang mengenai Khufra, membuatnya lebih sulit dikunci lama oleh musuh.',
    },
    {
      type: 'skill1',
      name: 'Bouncing Ball',
      description:
        'Khufra berubah jadi bola dan menggelinding ke depan, memberi damage dan stun ke musuh pertama yang tertabrak.',
    },
    {
      type: 'skill2',
      name: "Sumon's Fist",
      description:
        'Melepaskan gelombang energi yang menarik musuh di area terkena ke tengah, mengumpulkan mereka jadi satu titik.',
    },
    {
      type: 'ultimate',
      name: 'Speed of Light',
      description:
        'Menghentikan paksa dash/blink musuh dan langsung men-stun target tersebut — counter utama assassin mobile.',
    },
  ],
};
