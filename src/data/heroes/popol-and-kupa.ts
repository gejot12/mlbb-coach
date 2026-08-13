import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'popol-and-kupa',
  name: 'Popol and Kupa',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman dengan menara jebakan yang bisa memberi vision dan zoning area. Sangat efektif menahan dive assassin sebelum sempat mendekat.',
  strongAgainst: ['nolan', 'saber'],
  weakAgainst: ['zhuxin'],
  synergizesWith: ['minotaur'],
  builds: [
    {
      label: 'Core Zoning',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'windtalker', 'malefic-roar', 'wind-of-nature'],
      note: 'Windtalker menambah kontrol jarak untuk memaksimalkan zoning menara.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, tempatkan menara di titik rawan gank.' },
    { minute: 5, action: 'Push turret gold lane dengan bantuan vision dari menara.' },
    { minute: 10, action: 'Ikut rotasi objective, menara membantu deteksi dive musuh lebih awal.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang dengan menara sebagai zoning tambahan.' },
    { minute: 20, action: 'Teamfight: tempatkan menara di jalur masuk assassin sebelum fight dimulai.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Best Partner',
      description:
        'Kupa (si beruang) selalu mengikuti dan ikut menyerang bersama Popol; keduanya saling melengkapi damage dan kontrol saat bertarung.',
    },
    {
      type: 'skill1',
      name: 'Spear Throw',
      description:
        'Popol melempar tombak ke arah garis lurus, memberi damage ke musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: "Kupa's Rage",
      description:
        'Kupa melompat menyerang area yang dipilih, memberi damage dan sedikit knock back ke musuh di sekitarnya.',
    },
    {
      type: 'ultimate',
      name: 'Fully-braced Kupa',
      description:
        'Kupa berubah menjadi menara jebakan stasioner yang otomatis menyerang musuh di sekitarnya dan memberi vision area, sementara Popol bebas bergerak terpisah.',
    },
  ],
};
