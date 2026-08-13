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
  skills: [
    {
      type: 'passive',
      name: 'Wind Guide',
      description:
        'Menyerang dengan seruling yang menghasilkan hit tambahan tiap beberapa basic attack, menaikkan total damage output dari waktu ke waktu.',
    },
    {
      type: 'skill1',
      name: 'Wind Rings',
      description:
        'Melepaskan gelombang angin ke arah target, memberi damage dan sedikit slow pada musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Wind Chasing',
      description:
        'Melesat cepat ke arah yang dipilih menembus musuh, memberi damage ke semua yang dilewati sekaligus reposisi.',
    },
    {
      type: 'ultimate',
      name: 'Symphony of Silence',
      description:
        'Meniup seruling dalam area luas, memberi rentetan damage berulang dan silence pada semua musuh yang terjebak di dalamnya.',
    },
  ],
};
