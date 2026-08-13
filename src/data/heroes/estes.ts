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
  skills: [
    {
      type: 'passive',
      name: 'Fairy Wingbeat',
      description:
        'Estes secara perlahan memberi heal ke hero rekan yang berada di dekatnya seiring waktu.',
    },
    {
      type: 'skill1',
      name: 'Firefly Gleam',
      description:
        'Menembakkan proyektil ke arah musuh yang dipilih, memberi damage sekaligus meningkatkan efek heal pasif untuk sesaat.',
    },
    {
      type: 'skill2',
      name: 'Sacred Butterfly',
      description:
        'Memberi buff kepada satu hero rekan yang dipilih, meningkatkan damage dan defense mereka untuk sementara waktu.',
    },
    {
      type: 'ultimate',
      name: 'Woodland Protection',
      description:
        'Memberi heal besar secara terus-menerus ke seluruh tim di manapun posisi mereka selama durasi ultimate aktif.',
    },
  ],
};
