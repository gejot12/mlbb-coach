import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'tigreal',
  name: 'Tigreal',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'easy',
  summary:
    'Tank inisiator klasik dengan ultimate area stun (Sacred Bull Charge). Kuat untuk membuka teamfight dan melindungi hero core.',
  strongAgainst: ['layla', 'karrie'],
  weakAgainst: ['fanny', 'ling'],
  synergizesWith: ['karrie', 'layla'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['warrior-boots', 'antique-cuirass', 'athenas-shield', 'immortality', 'dominance-ice', 'cursed-helmet'],
      note: 'Fokus hybrid defense supaya tahan lawan physical dan magic damage sekaligus.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Standby di lane roam, bantu jaga vision di river/turtle.' },
    { minute: 2, action: 'Ganking ke exp/gold lane setelah level 2-3 kalau ada peluang stun combo.' },
    { minute: 6, action: 'Kontrol turtle/lord, siap engage duluan begitu musuh lengah.' },
    { minute: 10, action: 'Rotasi grup bareng tim, cari peluang ultimate area untuk membuka fight.' },
    { minute: 15, action: 'Full teamfight mode: fokus stun carry musuh, jangan buang ultimate sembarangan.' },
  ],
};
