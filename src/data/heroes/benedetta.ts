import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'benedetta',
  name: 'Benedetta',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan dash berulang lewat ultimate yang bisa reset combo tanpa batas selama musuh masih terkena efek. Sangat berbahaya di tangan yang mahir.',
  strongAgainst: ['odette'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'berserkers-fury', 'endless-battle', 'malefic-roar', 'windtalker'],
      note: 'Fokus penetration dan critical untuk memaksimalkan tiap dash combo ultimate.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih rhythm dash combo di ruang sempit.' },
    { minute: 4, action: 'Gank lane dengan combo dash-reset untuk kill instan.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu carry musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank setelah CC utama musuh terpakai.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Poison Dagger',
      description:
        'Serangan dasar Benedetta memberi efek racun tambahan ke musuh, menambah damage berkelanjutan seiring waktu.',
    },
    {
      type: 'skill1',
      name: 'Combo Slash',
      description:
        'Menyerang cepat ke depan dengan pedang ganda, memberi damage fisik ke musuh dalam jangkauan dekat.',
    },
    {
      type: 'skill2',
      name: "Grace Blade / Frenzy",
      description:
        'Benedetta dash menembus musuh yang dilewatinya, memberi damage sekaligus reposisi cepat lewat mereka.',
    },
    {
      type: 'ultimate',
      name: 'Coup de Grace',
      description:
        'Benedetta bisa dash berulang ke target yang sama selama musuh masih terkena efek marking, memberi damage besar tiap kali dash mendarat.',
    },
  ],
};
