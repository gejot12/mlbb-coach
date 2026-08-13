import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'argus',
  name: 'Argus',
  roles: ['fighter'],
  lanes: ['jungle', 'exp'],
  difficulty: 'medium',
  summary:
    'Fighter dengan kemampuan revive sekali lewat ultimate, membuatnya sangat sulit dibunuh permanen dalam satu fight. Kuat trading berkepanjangan.',
  strongAgainst: ['aulus'],
  weakAgainst: ['zhuxin'],
  synergizesWith: ['esmeralda'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'immortality'],
      note: 'Sustain tinggi untuk memaksimalkan trade sebelum dan sesudah revive ultimate.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle atau trade exp lane, manfaatkan sustain untuk menang war of attrition.' },
    { minute: 4, action: 'Gank agresif karena revive ultimate mengurangi risiko mati sia-sia.' },
    { minute: 9, action: 'Kontrol turtle, jangan takut all-in karena ada nyawa cadangan.' },
    { minute: 14, action: 'Split push atau rotasi grup, jadi ancaman konstan di map.' },
    { minute: 19, action: 'Teamfight: all-in agresif ke carry musuh, manfaatkan revive untuk fight kedua.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Evil Awakens',
      description:
        'Skill Argus saling mengurangi cooldown satu sama lain saat dipakai, membuat rotasi combo-nya jadi lebih sering dan agresif.',
    },
    {
      type: 'skill1',
      name: 'Rising Fury',
      description:
        'Argus menyerang ke depan dengan pedang bersayap, memberi damage fisik ke musuh dalam area garis pendek.',
    },
    {
      type: 'skill2',
      name: 'Wing Slash',
      description:
        'Melompat ke arah musuh dan menyerang area sekitar pendaratan, memberi damage sekaligus mendekatkan Argus ke target.',
    },
    {
      type: 'ultimate',
      name: 'Judgement of Light',
      description:
        'Argus mengubah bentuk menjadi lebih kuat dan langsung menyerang musuh sekitar; jika mati dalam waktu singkat setelahnya ia bisa bangkit kembali dengan sebagian HP.',
    },
  ],
};
