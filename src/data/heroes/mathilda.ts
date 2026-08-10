import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'mathilda',
  name: 'Mathilda',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support roam dengan mobilitas tinggi lewat dash yang bisa membawa ally. Sangat kuat membantu inisiasi maupun evakuasi ally yang terjebak.',
  strongAgainst: ['fanny'],
  weakAgainst: ['khufra'],
  synergizesWith: ['harith', 'hayabusa'],
  builds: [
    {
      label: 'Core Mobility',
      itemSlugs: ['arcane-boots', 'enchanted-talisman', 'concentrated-energy', 'athenas-shield', 'divine-glaive'],
      note: 'Fokus item yang menambah survivability karena Mathilda sering jadi orang pertama yang masuk fight.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, mulai latih timing dash assist untuk kabur/masuk fight.' },
    { minute: 4, action: 'Roam bantu lane lain dengan mobility tinggi.' },
    { minute: 8, action: 'Kontrol vision objective, siap dash membantu ally yang terjebak.' },
    { minute: 13, action: 'Selalu dekat carry utama untuk assist mobility saat rotasi grup.' },
    { minute: 18, action: 'Teamfight: gunakan dash untuk membuka fight atau menyelamatkan ally yang di-fokus.' },
  ],
};
