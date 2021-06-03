import Board from '../models/board.model';

const createBoard = async (data: { slug: String; name: String }) => {
  const { slug, name } = data;
  const board = new Board({
    slug,
    name,
  });

  /* const result = */await board.save();
  // eslint-disable-next-line no-console
  /* console.log(result); */
};

const boards: Array<{ slug: String; name: String }> = [
  { slug: 'a', name: 'Anime & Manga' },
  { slug: 'c', name: 'Anime/Cute' },
  { slug: 'w', name: 'Anime/Wallpapers' },
  { slug: 'm', name: 'Mecha' },
  { slug: 'cgl', name: 'Cosplay & EGL' },
  { slug: 'cm', name: 'Cute/Male' },
  { slug: 'n', name: 'Transportation' },
  { slug: 'jp', name: 'Otaku Culture' },
  { slug: 'v', name: 'Video Games' },
  { slug: 'vg', name: 'Video Game Generals' },
  { slug: 'vm', name: 'Video Games/Multiplayer' },
  { slug: 'vmg', name: 'Video Games/Mobile' },
  { slug: 'vp', name: 'Pokémon' },
  { slug: 'vr', name: 'Retro Games' },
  { slug: 'vrpg', name: 'Video Games/RPG' },
  { slug: 'vst', name: 'Video Games/Strategy' },
  { slug: 'co', name: 'Comics & Cartoons' },
  { slug: 'g', name: 'Technology' },
  { slug: 'tv', name: 'Television & Film' },
  { slug: 'k', name: 'Weapons' },
  { slug: 'o', name: 'Auto' },
  { slug: 'an', name: 'Animals & Nature' },
  { slug: 'tg', name: 'Traditional Games' },
  { slug: 'sp', name: 'Sports' },
  { slug: 'asp', name: 'Alternative Sports' },
  { slug: 'sci', name: 'Science & Math' },
  { slug: 'his', name: 'History & Humanities' },
  { slug: 'int', name: 'International' },
  { slug: 'out', name: 'Outdoors' },
  { slug: 'toy', name: 'Toys' },
  { slug: 'po', name: 'Papercraft & Origami' },
  { slug: 'p', name: 'Photography' },
  { slug: 'ck', name: 'Food & Cooking' },
  { slug: 'lit', name: 'Literature' },
  { slug: 'mu', name: 'Music' },
  { slug: 'fa', name: 'Fashion' },
  { slug: '3', name: '3DCG' },
  { slug: 'gd', name: 'Graphic Design' },
  { slug: 'diy', name: 'Do-It-Yourself' },
  { slug: 'wsg', name: 'Worksafe GIF' },
  { slug: 'qst', name: 'Quests' },
  { slug: 'biz', name: 'Business & Finance' },
  { slug: 'trv', name: 'Travel' },
  { slug: 'fit', name: 'Fitness' },
  { slug: 'x', name: 'Paranormal' },
  { slug: 'adv', name: 'Advice' },
  { slug: 'lgbt', name: 'LGBT' },
  { slug: 'mlp', name: 'Pony' },
  { slug: 'news', name: 'Current News' },
  { slug: 'wsr', name: 'Worksafe Requests' },
  { slug: 'vip', name: 'Very Important Posts' },
];

// export default async () => Promise.all(boards.map(async (board) => createBoard(board)));
export default async () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const board of boards) {
    // eslint-disable-next-line no-await-in-loop
    await createBoard(board);
  }
};
