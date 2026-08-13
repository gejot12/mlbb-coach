import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'lancelot',
  name: 'Lancelot',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan rangkaian dash yang sulit diprediksi. Sangat efektif memburu marksman/mage, tapi lemah kalau CC-nya diinterupsi lebih dulu.',
  strongAgainst: ['karrie', 'layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['berserkers-fury', 'endless-battle', 'blade-of-despair', 'malefic-roar', 'windtalker'],
      note: 'Fokus critical + penetration untuk memaksimalkan burst combo dash.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle efisien, latih timing dash-parry di dinding map.' },
    { minute: 4, action: 'Gank lane yang mudah setelah kombinasi dash-ultimate tersedia.' },
    { minute: 8, action: 'Kontrol turtle sambil cari peluang pick-off ringan.' },
    { minute: 13, action: 'Snowball dengan terus memburu carry musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank setelah CC utama musuh terpakai.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Wind Blade',
      description:
        'Basic attack yang mengenai musuh mengurangi sisa cooldown skill pertama Lancelot, mempercepat rotasi combo dash-nya.',
    },
    {
      type: 'skill1',
      name: 'Thorned Rose',
      description:
        'Menusuk maju ke arah target, memberi damage garis pendek dan mendekatkan Lancelot ke musuh.',
    },
    {
      type: 'skill2',
      name: 'Puncture Steel',
      description:
        'Berputar sambil menyerang area di sekitarnya, bisa dipakai dua kali berturut-turut untuk damage dan mobilitas tambahan.',
    },
    {
      type: 'ultimate',
      name: 'Reservoir of Sanity',
      description:
        'Melesat cepat dan kebal sesaat sambil melancarkan rangkaian tebasan ke semua musuh di sekitarnya — combo eksekusi andalan Lancelot.',
    },
  ],
};
