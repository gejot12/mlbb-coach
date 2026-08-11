import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'sora',
  name: 'Sora',
  roles: ['fighter', 'assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Fighter-assassin dengan serangan seruling multi-hit dan mobilitas tinggi. Sangat efektif memburu marksman yang jarang punya mobility skill.',
  strongAgainst: ['miya'],
  weakAgainst: ['khufra'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['raptor-machete', 'blade-of-despair', 'berserkers-fury', 'endless-battle', 'wind-of-nature'],
      note: 'Attack speed tinggi memaksimalkan jumlah hit dari combo seruling.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih combo multi-hit untuk burst maksimal.' },
    { minute: 4, action: 'Gank lane setelah combo penuh tersedia untuk kill cepat.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu marksman musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank setelah CC utama musuh terpakai.' },
  ],
};
