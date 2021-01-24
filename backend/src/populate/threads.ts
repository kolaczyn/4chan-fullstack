import Thread from '../models/thread.model';
import Reply from '../models/reply.model';
import Board from '../models/board.model';

interface InitialPostData {
  comment: String,
  name?: String,
}

interface ThreadDataType {
  boardSlug: String,
  subject: String,
  initialPostData: InitialPostData,
}

const createThread = async (threadData: ThreadDataType) => {
  const { boardSlug, subject, initialPostData } = threadData;
  const { comment, name } = initialPostData;

  const initialPost = new Reply({
    comment,
    name,
  });

  const thread = new Thread({
    subject,
    initialPost,
  });

  const board = await Board.updateOne({ slug: boardSlug }, { $push: { threads: thread } });
  console.log(board);
};

const threadsData = [
  {
    boardSlug: 'g',
    subject: 'this is a subject, lorem ipsum',
    initialPostData: {
      comment: 'comment this is, lorem ispum',
    },
  },
  {
    boardSlug: 'g',
    subject: 'subject no.2',
    initialPostData: {
      comment: 'some stupd comment from thread no.2',
      name: 'trip',
    },
  },
  {
    boardSlug: 'a',
    subject: '3s',
    initialPostData: {
      comment: '3c',
    },
  },
];

export default () => threadsData.forEach((thread) => createThread(thread));
