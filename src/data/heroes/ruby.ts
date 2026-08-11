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
};
