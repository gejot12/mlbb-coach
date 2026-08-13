import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'helcurt',
  name: 'Helcurt',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Assassin jungler dengan ultimate area yang membutakan dan membisukan musuh sekitar. Sangat kuat melumpuhkan marksman yang mengandalkan basic attack.',
  strongAgainst: ['moskov'],
  weakAgainst: ['khufra'],
  synergizesWith: ['natalia'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'malefic-roar', 'endless-battle', 'berserkers-fury', 'wind-of-nature'],
      note: 'Burst tinggi supaya target sudah setengah mati sebelum efek blind ultimate berakhir.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih timing masuk-keluar semak untuk stealth combo.' },
    { minute: 4, action: 'Gank lane dengan ultimate blind untuk melumpuhkan damage musuh saat combo.' },
    { minute: 8, action: 'Kontrol turtle, ultimate blind sangat kuat untuk menang kontes lawan marksman.' },
    { minute: 13, action: 'Snowball dengan terus memburu marksman/carry musuh.' },
    { minute: 18, action: 'Teamfight: ultimate ke kerumunan musuh untuk blind massal sebelum fight utama.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Death Sentence',
      description:
        'Setelah beberapa saat tidak terlihat musuh atau berhasil membunuh, Helcurt mendapat stealth singkat dan bonus movement speed.',
    },
    {
      type: 'skill1',
      name: 'Fatal Territory',
      description:
        'Melempar bilah ke area yang dipilih, memberi damage dan slow ke semua musuh di dalamnya.',
    },
    {
      type: 'skill2',
      name: 'Deadly Verdict',
      description:
        'Menerjang cepat ke arah target, memberi damage ke musuh pertama yang terkena.',
    },
    {
      type: 'ultimate',
      name: 'Eternal Night',
      description:
        'Membutakan dan membisukan semua musuh di sekitarnya sekaligus mengurangi jarak pandang mereka, sangat efektif melumpuhkan hero yang mengandalkan basic attack atau skill.',
    },
  ],
};
