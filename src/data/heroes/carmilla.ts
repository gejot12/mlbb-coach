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
  skills: [
    {
      type: 'passive',
      name: "Ally's Nightmare / Enemy's Dream",
      description:
        'Carmilla menyerap sebagian damage yang mengarah ke hero tim terdekat, membantu peel dari burst musuh.',
    },
    {
      type: 'skill1',
      name: 'Blood Vow',
      description:
        'Menandai musuh yang terkena sehingga damage yang diterimanya bertambah untuk sementara waktu.',
    },
    {
      type: 'skill2',
      name: 'Frenzy Fangs',
      description:
        'Melemparkan efek freeze ke area target, menahan pergerakan musuh yang terkena di dalamnya.',
    },
    {
      type: 'ultimate',
      name: 'Bat Barrage',
      description:
        'Carmilla mengirim gerombolan kelelawar ke area luas, memberi damage berkelanjutan ke semua musuh yang berada di dalamnya.',
    },
  ],
};
