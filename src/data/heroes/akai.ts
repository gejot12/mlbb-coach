import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'akai',
  name: 'Akai',
  roles: ['tank'],
  lanes: ['jungle'],
  difficulty: 'easy',
  summary:
    'Tank jungler dengan knock-up area lewat ultimate yang efektif menginterupsi combo dive assassin. Sangat kuat sebagai inisiator sekaligus penyelamat tim.',
  strongAgainst: ['ling', 'fanny'],
  weakAgainst: ['pharsa', 'zhuxin'],
  synergizesWith: ['miya'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['raptor-machete', 'tough-boots', 'antique-cuirass', 'dominance-ice', 'immortality', 'cursed-helmet'],
      note: 'Prioritas HP dan hybrid defense supaya ultimate knock-up bisa dipakai berulang tanpa takut mati duluan.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle efisien, latih timing knock-up untuk interupsi combo musuh.' },
    { minute: 4, action: 'Gank lane dengan roll-stun untuk kunci kill awal.' },
    { minute: 9, action: 'Kontrol turtle, siap ultimate untuk membalas dive musuh.' },
    { minute: 14, action: 'Selalu dekat carry saat rotasi grup untuk peel dari assassin.' },
    { minute: 19, action: 'Teamfight: simpan ultimate untuk knock-up massal saat musuh mengelompok.' },
  ],
};
