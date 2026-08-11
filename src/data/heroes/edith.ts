import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'edith',
  name: 'Edith',
  roles: ['tank', 'marksman'],
  lanes: ['roam'],
  difficulty: 'hard',
  summary:
    'Tank-marksman hybrid dengan mech suit yang bisa dilepas untuk ganti gaya bertarung: tanky saat pakai mech, damage tinggi saat lepas mech.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['tough-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'athenas-shield'],
      note: 'Item tank tetap relevan karena mode mech Edith butuh HP dan defense tinggi untuk inisiasi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam dengan mode mech untuk tahan lama.' },
    { minute: 4, action: 'Roam bantu lane lain, gunakan ultimate mech untuk engage jarak jauh.' },
    { minute: 9, action: 'Kontrol turtle, mode mech membantu menang kontes tank sekaligus damage.' },
    { minute: 14, action: 'Selalu siap engage duluan saat rotasi grup dengan tim.' },
    { minute: 19, action: 'Teamfight: engage dengan mech, lepas mech untuk damage tambahan setelah lock target.' },
  ],
};
