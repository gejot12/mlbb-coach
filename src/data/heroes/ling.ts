import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'ling',
  name: 'Ling',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan bounce dash lewat dinding/objek dan ultimate reset. Snowball cepat, sangat berbahaya lawan hero squishy.',
  strongAgainst: ['layla', 'lunox'],
  weakAgainst: ['khufra', 'chou'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'berserkers-fury', 'endless-battle', 'malefic-roar', 'windtalker'],
      note: 'Fokus critical + penetration supaya combo dash-slash bisa burst target secepat mungkin.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle efisien, manfaatkan bounce dash untuk pathing cepat antar camp.' },
    { minute: 4, action: 'Gank lane yang ada dinding/objek untuk memaksimalkan bounce combo.' },
    { minute: 8, action: 'Kontrol turtle sambil cari kill pick-off ringan.' },
    { minute: 13, action: 'Snowball lead dengan split push, hindari fight tanpa target priority jelas.' },
    { minute: 18, action: 'Teamfight: flank lewat wall/objek untuk langsung masuk ke backline.' },
  ],
};
