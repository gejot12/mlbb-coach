import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'kimmy',
  name: 'Kimmy',
  roles: ['marksman', 'mage'],
  lanes: ['gold'],
  difficulty: 'hard',
  summary:
    'Marksman-mage hybrid dengan dua mode senjata (pistol magic dan senapan physical). Sangat kuat lawan tank berkat damage magic penetrasinya.',
  strongAgainst: ['grock'],
  weakAgainst: ['saber'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['rapid-boots', 'holy-crystal', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Build hybrid magic-physical karena Kimmy punya dua mode senjata berbeda damage type.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, kenali kapan pakai mode pistol vs senapan.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective setelah dua item core selesai.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi fleksibel ganti mode senjata.' },
    { minute: 20, action: 'Teamfight: mode pistol magic untuk anti-tank, mode senapan untuk damage sustained.' },
  ],
};
