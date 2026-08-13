import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'ruby',
  name: 'Ruby',
  roles: ['fighter', 'tank'],
  lanes: ['exp', 'roam'],
  difficulty: 'medium',
  summary:
    'Fighter-tank dengan sabit yang bisa menghook dan menarik musuh, plus spell vamp di semua skill untuk sustain tinggi. Fleksibel main exp lane maupun roam.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'antique-cuirass', 'immortality'],
      note: 'Endless Battle memaksimalkan spell vamp bawaan Ruby untuk sustain ekstra tinggi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane atau jaga roam, manfaatkan spell vamp untuk sustain.' },
    { minute: 4, action: 'Rotasi gank dengan combo hook-pull untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle, hook carry musuh yang mencoba kontes.' },
    { minute: 14, action: 'Ikut grouping, isolasi carry musuh dengan hook sebelum fight utama.' },
    { minute: 19, action: 'Teamfight: hook carry musuh menjauh dari timnya, manfaatkan sustain untuk bertahan lama.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Regeneration',
      description:
        'Semua skill Ruby memberi efek spell vamp, memulihkan sebagian HP-nya berdasarkan damage yang diberikan ke musuh.',
    },
    {
      type: 'skill1',
      name: 'Judgment of Destruction',
      description:
        'Ruby melompat dan menghantam area di depan dengan sabit, memberi damage ke semua musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Scarlet Rain',
      description:
        'Melempar sabit ke target yang dipilih untuk menghook dan menarik musuh tersebut mendekat ke arah Ruby.',
    },
    {
      type: 'ultimate',
      name: 'Fragrant Roses',
      description:
        'Ruby berputar sambil menyerang semua musuh di sekitarnya secara berulang, memberi damage terus-menerus selama durasi ultimate aktif.',
    },
  ],
};
