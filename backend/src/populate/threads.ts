import Thread from '../models/thread.model';
import Reply from '../models/reply.model';
import Board from '../models/board.model';

interface InitialPostData {
  comment: String;
  name?: String;
}

interface ThreadDataType {
  boardSlug: String;
  threadId: String;
  subject: String;
  initialPostData: InitialPostData;
}

const createThread = async (threadData: ThreadDataType) => {
  const {
    threadId, boardSlug, subject, initialPostData,
  } = threadData;
  const { comment, name } = initialPostData;

  const initialPost = new Reply({
    comment,
    name,
  });

  const thread = new Thread({
    subject,
    replies: [initialPost],
    _id: threadId,
    board: boardSlug,
  });

  const savedThread = await thread.save();
  const { _id } = savedThread;

  const board = await Board.findOne({ slug: boardSlug });
  // eslint-disable-next-line no-console
  console.log(board);
  if (board === null) {
  // eslint-disable-next-line no-console
    return console.error('Board is null in populate threads screipt');
  }
  board.threads.push(_id);

  const result = await board.save();
  // eslint-disable-next-line no-console
  return console.log(result);
};

const threadsData: Array<ThreadDataType> = [
  {
    boardSlug: 'g',
    threadId: '60157ef256a8088d36fbb2ad',
    subject: 'this is a subject, lorem ipsum',
    initialPostData: {
      comment: 'comment this is, lorem ispum',
    },
  },
  {
    boardSlug: 'g',
    threadId: '60157ef256a8088d36fbb2b0',
    subject: 'subject no.2',
    initialPostData: {
      comment: 'some stupd comment from thread no.2',
      name: 'trip',
    },
  },
  {
    boardSlug: 'a',
    threadId: '60158018d33f81f77f3d4596',
    subject: '3s',
    initialPostData: {
      comment: '3c',
    },
  },
  {
    boardSlug: 'a',
    threadId: '60157ef256a8088d36fbb2aa',
    subject: 'satania is my waifu. whose with me?',
    initialPostData: {
      comment: 'I hate it when satania gets bullied, she doesnt deserve it..',
    },
  },
];

/* export default () => repliesData.forEach((reply) => createReply(reply)); */
export default async () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const thread of threadsData) {
    // eslint-disable-next-line no-await-in-loop
    await createThread(thread);
    // eslint-disable-next-line no-console
    console.log('thread', thread, 'created');
  }
};
