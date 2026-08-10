import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'miya',
  name: 'Miya',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'easy',
  summary:
    'Marksman hero paling awal di MLBB, dengan ultimate yang menambah attack speed dan invisibility singkat. Damage stabil dan mudah dipelajari.',
  strongAgainst: ['zhuxin'],
  weakAgainst: ['saber', 'nolan'],
  synergizesWith: ['atlas'],
  builds: [
    {
      label: 'Core Attack Speed',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'windtalker', 'wind-of-nature', 'blade-of-despair'],
      note: 'Bangun attack speed dan crit secepat mungkin karena Miya sangat bergantung pada basic attack.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane fokus penuh, jaga posisi aman dari gank.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Rotasi ke objective hanya dengan perlindungan tim.' },
    { minute: 15, action: 'Grouping dengan tim, gunakan ultimate untuk invis saat reposisi.' },
    { minute: 20, action: 'Teamfight: fokus damage stabil dari posisi aman, manfaatkan invis untuk kabur dari fokus musuh.' },
  ],
};
