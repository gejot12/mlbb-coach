import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'jawhead',
  name: 'Jawhead',
  roles: ['fighter'],
  lanes: ['jungle', 'exp'],
  difficulty: 'medium',
  summary:
    'Fighter dengan kemampuan melempar musuh menjauh dari tim mereka, sangat efektif mengisolasi carry musuh dari perlindungan tim.',
  strongAgainst: ['miya'],
  weakAgainst: ['franco'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Isolasi',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'antique-cuirass', 'blade-of-despair', 'immortality'],
      note: 'Item hybrid tank-damage supaya bisa isolasi carry sekaligus bertahan lama.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle atau trade exp lane, latih timing lempar untuk isolasi.' },
    { minute: 4, action: 'Gank lane dengan lempar musuh keluar dari jangkauan bantuan tim mereka.' },
    { minute: 9, action: 'Kontrol turtle, isolasi carry musuh yang mencoba kontes.' },
    { minute: 14, action: 'Ikut rotasi grup, cari peluang isolasi carry musuh sebelum fight utama.' },
    { minute: 19, action: 'Teamfight: lempar carry musuh menjauh dari timnya sebelum tim sendiri all-in.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Mechanical Feast',
      description:
        'Berhasil membantu atau menyelesaikan kill mempercepat cooldown skill Jawhead, membuatnya bisa terus mengejar target berikutnya.',
    },
    {
      type: 'skill1',
      name: 'Impact',
      description:
        'Menerjang maju ke arah yang dipilih, memberi damage dan stun ke musuh pertama yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Somersault',
      description:
        'Melompat ke arah target, menangkap dan melemparkannya ke belakang Jawhead, memberi damage dan mengubah posisi musuh.',
    },
    {
      type: 'ultimate',
      name: 'Broken Blade',
      description:
        'Menangkap target dan melemparkannya sejauh mungkin menjauh dari posisi awal, memberi damage sekaligus mengisolasi target dari timnya.',
    },
  ],
};
