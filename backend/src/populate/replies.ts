import Board from '../models/board.model';
import Thread from '../models/thread.model';
import Reply from '../models/reply.model';

interface ThreadInfo {
  boardSlug: String;
  threadId: String;
}

interface ReplyData {
  comment: String;
  name?: String;
  threadInfo: ThreadInfo;
}

const createReply = async (replyData: ReplyData) => {
  const { comment, name, threadInfo } = replyData;
  const { boardSlug, threadId } = threadInfo;

  const reply = new Reply({
    comment,
    name,
  });

  const thread = await Thread.findOne({ _id: threadId });
  thread.replies.push(reply);

  const result = await thread.save();
  console.log(result);
};

const repliesData: Array<ReplyData> = [
  {
    comment: 'THIS WEEK IN KDE',
    name: 'trip',
    threadInfo: {
      boardSlug: 'g',
      threadId: '60157ef256a8088d36fbb2a7',
    },
  },
  {
    comment: '>Tfw no 4,6" screens anymore',
    threadInfo: {
      boardSlug: 'g',
      threadId: '60157ef256a8088d36fbb2a7',
    },
  },
  {
    comment:
      "When did you realize that it really doesn't matter what distro you use in the end?",
    threadInfo: {
      boardSlug: 'a',
      threadId: '60157ef256a8088d36fbb2ad',
    },
  },
  {
    comment: 'What happened to hope and optimism for the future of technology?',
    threadInfo: {
      boardSlug: 'g',
      threadId: '60157ef256a8088d36fbb2ad',
    },
  },
  {
    comment: 'Desktop rice/aesthetic thread?',
    threadInfo: {
      boardSlug: 'g',
      threadId: '60157ef256a8088d36fbb2b0',
    },
  },
  {
    comment:
      '/dpt/ - Daily Programming Thread: old thread >>79826989 What are you working on, /g/?',
    threadInfo: {
      boardSlug: 'g',
      threadId: '60157ef256a8088d36fbb2b0',
    },
  },
  {
    comment: 'Kuroba: why is it not updated anymore?',
    name: 'thomas',
    threadInfo: {
      boardSlug: 'a',
      threadId: '60157ef256a8088d36fbb2aa',
    },
  },
  {
    comment:
      'oldest smartphone on /g/: must be the one you use as a "daily driver"',
    threadInfo: {
      boardSlug: 'a',
      threadId: '60157ef256a8088d36fbb2aa',
    },
  },
  {
    comment: 'Just changed from chrome to firefox was it a bad idea?',
    threadInfo: {
      boardSlug: 'g',
      threadId: '60157ef256a8088d36fbb2b0',
    },
  },
  {
    comment: "i don't understand this program and i hate it",
    threadInfo: {
      boardSlug: 'g',
      threadId: '60157ef256a8088d36fbb2ad',
    },
  },
];

export default () => repliesData.forEach((reply) => createReply(reply));
