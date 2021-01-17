export type Thread = {
  board: String,
  ext: String,
  subject: String,
  comment: String,
  id: Number,
};

const threads: Array<Thread> = [
  {
    board: 'g',
    ext: 'jpg',
    subject: '/dpt/ - Dail Programming Thread',
    comment: 'What are you working on, /g/?',
    id: 100,
  },
  {
    board: 'a',
    ext: 'png',
    subject: 'Satania-sama thread',
    comment: '',
    id: 10,
  },
  {
    board: 'vp',
    ext: 'png',
    subject: '',
    comment: 'This is just a weaker Garchomp.',
    id: 100,

  },
  {
    board: 'tv',
    ext: 'jpg',
    subject: '',
    comment: "Can anybody tell me a joke that made them laugh in friends?\nI'm on series 5 now and I don't think I've laughed yet. It's just background noise.",
    id: 100,
  },
  {
    board: 'gd',
    ext: 'jpg',
    subject: '/wdg/ - Wed Design General',
    comment: 'What are you working on /gd/ ?',
    id: 4,
  },
  {
    board: 'v',
    ext: 'png',
    subject: 'Stardew valley',
    comment: 'stardew valley',
    id: 5,
  },
  {
    board: 'a',
    ext: 'jpg',
    subject: 'この素晴らしい世界に祝福を!',
    comment: "Who's best girl?",
    id: 12,
  },
  {
    board: 'g',
    ext: 'png',
    subject: 'Desktop Thread',
    comment: '',
    id: 7,
  },
  {
    board: 'g',
    ext: 'png',
    subject: 'iToddler. Do you?',
    comment: 'A special product just for (You)',
    id: 8,
  },
  {
    board: 'g',
    ext: 'png',
    subject: 'Luke Smith',
    comment: 'He looks a little bit like the default Runescape character. Huh',
    id: 9,
  },
  {
    board: 'adv',
    ext: 'jpg',
    subject: 'pls always rember',
    comment: '',
    id: 10,
  },
  {
    board: 'adv',
    ext: 'jpg',
    subject: 'juice that u drink when u are happy',
    comment: '',
    id: 11,
  },
];

export default threads;
