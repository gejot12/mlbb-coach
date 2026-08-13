import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'hirara',
  name: 'Hirara',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan rangkaian chain-CC yang efektif sebagai finisher fleksibel. Bisa masuk jungle maupun roam tergantung kebutuhan tim.',
  strongAgainst: ['layla'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'malefic-roar', 'endless-battle', 'berserkers-fury', 'windtalker'],
      note: 'Penetration dan critical tinggi untuk memaksimalkan combo chain-CC finisher.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih timing chain-CC untuk kunci combo.' },
    { minute: 4, action: 'Gank lane dengan chain-CC untuk kunci kill.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu carry musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank, chain-CC target priority sebelum fight utama.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Chain Strike',
      description:
        'Mengenai musuh dengan skill berturut-turut memberi bonus damage tambahan pada rangkaian combo tertentu.',
    },
    {
      type: 'skill1',
      name: 'Binding Strike',
      description:
        'Melempar rantai ke arah target, memberi damage dan menahan pergerakan musuh yang terkena sesaat.',
    },
    {
      type: 'skill2',
      name: 'Swift Chain',
      description:
        'Melesat ke arah yang dipilih memakai rantai, memberi damage ke musuh yang dilewati sekaligus reposisi cepat.',
    },
    {
      type: 'ultimate',
      name: "Assassin's Finale",
      description:
        'Mengunci target dengan rangkaian rantai, memberi damage besar berturut-turut dan crowd control tambahan — combo eksekusi utama.',
    },
  ],
};
