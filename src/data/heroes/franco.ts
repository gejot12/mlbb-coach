import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'franco',
  name: 'Franco',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Tank roam dengan hook jarak jauh (Iron Hook) untuk menarik musuh dari posisi aman. Sangat kuat lawan hero immobile.',
  strongAgainst: ['layla', 'estes'],
  weakAgainst: ['fanny', 'ling'],
  synergizesWith: ['kagura', 'lunox'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['warrior-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'athenas-shield', 'cursed-helmet'],
      note: 'Prioritas item yang menambah efektivitas hook (CD reduction) plus survivability.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Poke lane pakai hook untuk cari kill/assist awal, jaga jarak aman.' },
    { minute: 3, action: 'Roam ke lane lain, cari hook pick-off ke hero squishy.' },
    { minute: 8, action: 'Kontrol objective (turtle) dengan hook sebagai zoning tool.' },
    { minute: 12, action: 'Follow carry saat push turret, gunakan hook untuk memisahkan musuh dari grup.' },
    { minute: 18, action: 'Teamfight: buka fight dengan hook ke target prioritas (mage/marksman musuh).' },
  ],
};
