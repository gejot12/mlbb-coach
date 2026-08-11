import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'barats',
  name: 'Barats',
  roles: ['tank', 'fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Tank-fighter dengan rantai penarik musuh dan area denial yang efektif memblokir choke point. Sangat kuat menahan dive dan mengisolasi carry musuh.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['chou'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['warrior-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'blade-of-despair'],
      note: 'Item hybrid tank-damage supaya bisa isolasi carry sekaligus bertahan lama.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tahan exp lane, latih timing rantai untuk isolasi musuh.' },
    { minute: 4, action: 'Rotasi gank dengan rantai untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle, blokir choke point untuk area denial.' },
    { minute: 14, action: 'Ikut grouping, isolasi carry musuh sebelum fight utama.' },
    { minute: 19, action: 'Teamfight: rantai carry musuh menjauh dari timnya sebelum tim sendiri all-in.' },
  ],
};
