import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'cecilion',
  name: 'Cecilion',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid yang magic power-nya terus bertumbuh selama game berjalan. Sangat kuat menembus tank di late game, tapi rentan di-dive assassin karena posisinya statis.',
  strongAgainst: ['tigreal', 'franco'],
  weakAgainst: ['hayabusa', 'lancelot', 'fanny'],
  synergizesWith: ['mathilda'],
  builds: [
    {
      label: 'Core Scaling',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny sangat sinergi dengan passive stacking magic power Cecilion.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane semaksimal mungkin, hindari trade yang tidak perlu.' },
    { minute: 4, action: 'Tetap di lane untuk terus stack passive, hanya rotasi kalau benar-benar aman.' },
    { minute: 9, action: 'Poke objective dari jarak jauh, jangan masuk zona kontak langsung.' },
    { minute: 14, action: 'Grouping dengan tim, selalu di posisi paling belakang dan terlindungi.' },
    { minute: 19, action: 'Teamfight: nuke dari jarak jauh, andalkan tim untuk menahan dive assassin musuh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Devourer of the Sea',
      description:
        'Cecilion mendapat stack magic power permanen setiap kali skill mengenai musuh, membuatnya makin kuat seiring game berjalan.',
    },
    {
      type: 'skill1',
      name: 'Astral Bats',
      description:
        'Menembakkan gerombolan kelelawar lurus ke depan yang memberi damage ke semua musuh yang terkena di jalurnya.',
    },
    {
      type: 'skill2',
      name: 'Winged Reaper',
      description:
        'Melayangkan sayap di area sekitar, memberi damage berulang ke musuh yang berada di dalamnya selama durasi aktif.',
    },
    {
      type: 'ultimate',
      name: 'Endless Nightmare',
      description:
        'Melepaskan ledakan magic damage besar ke area luas di sekitar Cecilion, damage-nya meningkat sesuai jumlah stack passive yang terkumpul.',
    },
  ],
};
