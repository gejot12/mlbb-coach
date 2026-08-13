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
  skills: [
    {
      type: 'passive',
      name: 'Warrior Deity Descends',
      description:
        'Barats mendapat shield dan bonus damage saat memasuki teamfight, membantunya bertahan lebih lama sebagai frontline.',
    },
    {
      type: 'skill1',
      name: 'Deific Smash',
      description:
        'Menghantam tanah di depan, memberi damage dan sedikit slow ke semua musuh yang terkena di area tersebut.',
    },
    {
      type: 'skill2',
      name: 'Chain of Judgement',
      description:
        'Melemparkan rantai ke musuh, menarik target yang terkena ke arah Barats sekaligus memberi damage.',
    },
    {
      type: 'ultimate',
      name: 'Absolute Enforcement',
      description:
        'Barats membuat area dinding rantai di sekitarnya yang mencegah musuh di dalamnya kabur sambil memberi damage berkelanjutan — efektif mengisolasi carry.',
    },
  ],
};
