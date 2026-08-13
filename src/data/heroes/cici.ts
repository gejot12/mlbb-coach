import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'cici',
  name: 'Cici',
  roles: ['fighter', 'assassin'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter dengan senjata yo-yo yang memberi damage terus-menerus ke target terkunci dan mobilitas tinggi lewat lompatan berantai. Kuat memburu mage squishy di jungle/mid.',
  strongAgainst: ['eudora'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['raptor-machete', 'blade-of-despair', 'endless-battle', 'berserkers-fury', 'wind-of-nature'],
      note: 'Attack speed dan penetration untuk memaksimalkan rangkaian tendangan combo.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih rangkaian combo tendangan untuk burst maksimal.' },
    { minute: 4, action: 'Gank lane setelah combo penuh tersedia untuk kill cepat.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu mage/marksman musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank, rangkaian combo ke target priority.' },
  ],
  skills: [
    {
      type: 'passive',
      name: "Performer's Delight",
      description:
        'Cici mengumpulkan stack Delight setiap kali memberi damage, menambah movement speed dan spell vamp secara bertahap hingga maksimal.',
    },
    {
      type: 'skill1',
      name: 'Yo-Yo Blitz',
      description:
        'Melempar yo-yo ke musuh terdekat dan mengunci target untuk memberi damage berulang kali; Cici tetap bisa bergerak dan memakai skill lain selama serangan berlangsung.',
    },
    {
      type: 'skill2',
      name: 'Buoyant Bounce',
      description:
        'Cici melompat ke lokasi target; jika mendarat tepat di musuh, ia memberi damage lalu melompat lagi ke arah berikutnya untuk mengejar atau kabur.',
    },
    {
      type: 'ultimate',
      name: 'Curtain Call',
      description:
        'Melempar yo-yo untuk menghubungkan satu hero musuh dengan musuh terdekat lainnya, memberi damage dan slow sambil menarik keduanya saling mendekat.',
    },
  ],
};
