import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'atlas',
  name: 'Atlas',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'hard',
  summary:
    'Tank roam dengan ultimate global yang menarik seluruh musuh sekitar target ke satu titik. Sangat kuat membuka teamfight lima lawan lima sekaligus.',
  strongAgainst: ['miya', 'claude'],
  weakAgainst: ['esmeralda'],
  synergizesWith: ['zhuxin'],
  builds: [
    {
      label: 'Core Engage',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'antique-cuirass', 'immortality', 'athenas-shield', 'cursed-helmet'],
      note: 'Cooldown reduction penting supaya ultimate global bisa dipakai lebih sering.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, cari vision untuk persiapan ultimate global nanti.' },
    { minute: 4, action: 'Roam bantu lane lain, simpan ultimate untuk momen krusial.' },
    { minute: 9, action: 'Kontrol vision sekitar objective, siap tarik musuh yang overextend.' },
    { minute: 14, action: 'Selalu dekat carry, pastikan posisi aman sebelum inisiasi ultimate.' },
    { minute: 19, action: 'Teamfight: buka fight dari jarak jauh dengan ultimate global ke carry musuh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Abyssal Drag',
      description:
        'Atlas mendapat shield dan bonus movement speed saat mendekati musuh, membantunya bertahan sambil berlari ke arah target.',
    },
    {
      type: 'skill1',
      name: 'Highness Rage',
      description:
        'Atlas menghantam area di sekitarnya, memberi damage dan slow ke semua musuh yang terkena dalam radius dekat.',
    },
    {
      type: 'skill2',
      name: 'Fatal Links',
      description:
        'Melemparkan rantai ke musuh, mengaitkan mereka bersama Atlas sehingga jika musuh menjauh terlalu jauh akan tertarik kembali.',
    },
    {
      type: 'ultimate',
      name: 'Abyssal Netherworld',
      description:
        'Menyelam ke bawah tanah lalu muncul di lokasi target dari jarak sangat jauh, menarik semua musuh di sekitar titik tersebut ke satu titik pusat.',
    },
  ],
};
