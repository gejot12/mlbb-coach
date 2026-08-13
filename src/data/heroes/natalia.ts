import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'natalia',
  name: 'Natalia',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Assassin jungler dengan stealth permanen di semak dan burst combo instan. Sangat efektif memburu marksman/mage yang lengah tanpa vision.',
  strongAgainst: ['bruno'],
  weakAgainst: ['akai'],
  synergizesWith: ['selena'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'malefic-roar', 'endless-battle', 'berserkers-fury', 'windtalker'],
      note: 'Damage burst instan penting karena Natalia mengandalkan elemen kejutan dari stealth.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle, manfaatkan stealth di semak untuk pathing aman.' },
    { minute: 4, action: 'Camp di semak dekat lane musuh, tunggu momen tepat untuk pick-off.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang kill dari stealth.' },
    { minute: 13, action: 'Terus camp titik rawan musuh yang jarang beli vision.' },
    { minute: 18, action: 'Teamfight: masuk dari stealth ke target paling berbahaya sebelum fight utama dimulai.' },
  ],
  skills: [
    {
      type: 'passive',
      name: "Wolf's Instinct",
      description:
        'Natalia menjadi tidak terlihat musuh selama berada di dalam semak, dan mendapat bonus movement speed saat keluar dari stealth.',
    },
    {
      type: 'skill1',
      name: 'Claw Strike',
      description:
        'Menerkam ke arah target dengan cakar, memberi damage dan memperlambat musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Silent Blade',
      description:
        'Melancarkan rentetan cakar cepat ke target di depan, memberi damage berturut-turut dalam area kecil.',
    },
    {
      type: 'ultimate',
      name: 'Coup de Grace',
      description:
        'Melancarkan serangan eksekusi yang memberi damage true tambahan besar ke musuh ber-HP rendah, lalu membuat Natalia kembali stealth.',
    },
  ],
};
