import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'faramis',
  name: 'Faramis',
  roles: ['support', 'mage'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support-mage dengan ultimate yang bisa menghidupkan kembali seluruh tim yang mati baru-baru ini. Sangat kuat mengubah teamfight yang kalah jadi menang.',
  strongAgainst: ['pharsa'],
  weakAgainst: ['saber'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Support',
      itemSlugs: ['arcane-boots', 'enchanted-talisman', 'clock-of-destiny', 'concentrated-energy', 'athenas-shield'],
      note: 'Cooldown reduction dan mana sustain penting supaya ultimate revive selalu siap.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, kumpulkan soul dari minion/hero yang mati untuk buff.' },
    { minute: 4, action: 'Roam bantu lane lain, terus kumpulkan soul untuk stack buff.' },
    { minute: 9, action: 'Kontrol turtle, simpan ultimate untuk momen krusial.' },
    { minute: 14, action: 'Selalu dekat tim saat rotasi grup, siap revive kalau fight kalah.' },
    { minute: 19, action: 'Teamfight: gunakan ultimate revive setelah tim kalah fight pertama untuk membalikkan keadaan.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Book of Sky-Blue Flame',
      description:
        'Faramis mendapat soul dari minion dan hero yang mati di dekatnya; mengumpulkan soul memberinya buff HP dan magic power permanen.',
    },
    {
      type: 'skill1',
      name: 'Fell Space',
      description:
        'Melancarkan gelombang energi ke area yang dipilih, memberi damage ke semua musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Fiendish Fetter',
      description:
        'Melemparkan rantai ke area target, memberi damage dan menahan pergerakan musuh yang terkena selama beberapa saat.',
    },
    {
      type: 'ultimate',
      name: 'Book of Reborn',
      description:
        'Menghidupkan kembali semua hero rekan yang tewas dalam waktu belakangan ini di lokasi Faramis berada, mengubah keadaan teamfight secara drastis.',
    },
  ],
};
