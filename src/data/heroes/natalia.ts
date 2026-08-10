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
};
