import Reply from '../models/reply.model';

const createReply = async (data: { comment: String, name?: String, replyId: Number }) => {
  const { comment, name, replyId } = data;
  const reply = new Reply({
    comment,
    name,
    replyId,
  });

  const result = await reply.save();
  console.log(result);
};

const repliesData = [
  {
    comment: 'THIS WEEK IN KDE',
    name: 'trip',
  },
  {
    comment: '>Tfw no 4,6" screens anymore',
  },
  {
    comment: "When did you realize that it really doesn't matter what distro you use in the end?",
  },
  {
    comment: 'What happened to hope and optimism for the future of technology?',
  },
  {
    comment: 'Desktop rice/aesthetic thread?',
  },
  {
    comment: '/dpt/ - Daily Programming Thread: old thread >>79826989 What are you working on, /g/?',
  },
  {
    comment: 'Kuroba: why is it not updated anymore?',
    name: 'thomas',
  },
  {
    comment: 'oldest smartphone on /g/: must be the one you use as a "daily driver"',
  },
  {
    comment: 'Just changed from chrome to firefox was it a bad idea?',
  },
  {
    comment: "i don't understand this program and i hate it",
  },
];

export default () => repliesData.forEach((reply, idx) => createReply({ ...reply, replyId: idx + 1 }));
