import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'estes',
  name: 'Estes',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support roam dengan heal area lewat ultimate. Sangat kuat menopang fighter/marksman sustain, lemah lawan burst combo cepat.',
  strongAgainst: ['alucard'],
  weakAgainst: ['gusion', 'lunox'],
  synergizesWith: ['karrie', 'layla'],
  builds: [
    {
      label: 'Core Support',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'athenas-shield', 'immortality', 'cursed-helmet', 'dominance-ice'],
      note: 'Prioritas item hybrid defense + cooldown reduction supaya heal ultimate lebih sering aktif.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam sambil siapkan vision di area rawan gank.' },
    { minute: 4, action: 'Rotasi bantu lane yang butuh heal/peel setelah level cukup.' },
    { minute: 8, action: 'Kontrol turtle sambil siap heal area untuk tim yang berebut objective.' },
    { minute: 13, action: 'Selalu dekat carry utama tim untuk sustain damage trade.' },
    { minute: 18, action: 'Teamfight: aktifkan ultimate heal saat tim mulai baku hantam, bukan di awal fight.' },
  ],
};
