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
  skills: [
    {
      type: 'passive',
      name: 'Fury of the Earthshaker',
      description:
        'Franco mendapat bonus physical defense dan sedikit heal setiap kali skill-nya mengenai musuh.',
    },
    {
      type: 'skill1',
      name: 'Iron Hook',
      description:
        'Melemparkan rantai hook lurus ke depan, menarik musuh pertama yang terkena mendekat ke Franco sekaligus memberi damage.',
    },
    {
      type: 'skill2',
      name: 'Fury Shock',
      description:
        'Menghantam tanah di sekitar Franco, memberi damage dan sedikit stun ke musuh yang berada dalam jangkauannya.',
    },
    {
      type: 'ultimate',
      name: "Netherworld's Punishment",
      description:
        'Menghisap seluruh musuh di area sekitar mendekat ke Franco, memberi damage dan crowd control agar tim bisa follow-up combo.',
    },
  ],
};
