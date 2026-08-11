import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'carmilla',
  name: 'Carmilla',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'hard',
  summary:
    'Support roam dengan kemampuan membekukan musuh dan menyerap sebagian damage lewat pasangan mekanik unik. Sangat kuat melawan dive assassin.',
  strongAgainst: ['karina'],
  weakAgainst: ['eudora'],
  synergizesWith: ['bruno'],
  builds: [
    {
      label: 'Core Support',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'athenas-shield', 'immortality', 'cursed-helmet'],
      note: 'Hybrid defense penting supaya Carmilla tahan lama sambil terus mengganggu musuh.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, gunakan skill freeze untuk kontrol trade.' },
    { minute: 4, action: 'Roam bantu lane lain dengan freeze untuk kunci gank.' },
    { minute: 9, action: 'Kontrol turtle, freeze target priority saat kontes objective.' },
    { minute: 14, action: 'Selalu dekat carry utama, siap freeze musuh yang mendekat.' },
    { minute: 19, action: 'Teamfight: freeze carry/assassin musuh yang paling berbahaya sebelum fight utama.' },
  ],
};
