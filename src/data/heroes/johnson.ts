import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'johnson',
  name: 'Johnson',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Tank roam dengan ultimate mobil yang bisa membawa dirinya dan tim ke lokasi manapun di map, lalu stun area saat menabrak. Sangat kuat untuk engage kejutan.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['gusion'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'antique-cuirass', 'immortality', 'athenas-shield'],
      note: 'Cooldown reduction penting supaya ultimate mobil bisa dipakai lebih sering untuk rotasi/engage.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, hafal jalur map untuk rotasi cepat lewat ultimate.' },
    { minute: 4, action: 'Gunakan ultimate untuk rotasi cepat bantu gank lane lain secara mengejutkan.' },
    { minute: 9, action: 'Kontrol turtle, siap bawa ally lewat ultimate untuk kontes mendadak.' },
    { minute: 14, action: 'Selalu siap engage kejutan ke carry musuh yang terisolasi.' },
    { minute: 19, action: 'Teamfight: masuk mendadak dari sisi tak terduga dengan ultimate mobil, stun target priority.' },
  ],
};
