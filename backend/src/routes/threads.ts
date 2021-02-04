import express, { Request, Response } from 'express';

import slugToName from '../const/slugToName.json';
import ThreadModel from '../models/thread.model';
import ReplyModel from '../models/reply.model';
import BoardModel from '../models/board.model';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const allThreads = await ThreadModel.find();
  res.send(allThreads);
});

router.get('/popular', async (req: Request, res: Response) => {
  // for now we give 8 'random' posts. Maybe later just give 8 posts with the most replies?
  const popularThreads = await ThreadModel.find().limit(8);

  return res.send(popularThreads);
  // res.send(theads.slice(0, 8));
});

router.get('/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params;
  if (!(slug in slugToName)) return res.status(400).send('Invalid board name');

  const board = await BoardModel.findOne({ slug }).populate('threads');
  console.log(board);
  return res.send(board);
});

router.get('/:slug/:id', async (req: Request, res: Response) => {
  const { slug, id } = req.params;
  if (!(slug in slugToName)) return res.status(400).send('Invalid board name');
  console.log(id);

  // const board = await BoardModel.findOne({ slug });
  try {
    const thread = await ThreadModel.findById(id);
    if (!thread) return res.status(404).send('Thread not found');
    return res.send(thread);
  } catch (ex) {
    return res.status(400).send('Invalid board id');
  }
  // console.log(thread);
});

// post a thread
router.post('/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params;
  // TODO maybe I should redirect the request to post reply afte creating the thread?
  // I use this exact line of code in few other places
  // TODO see if there's a way to fix that
  if (!(slug in slugToName)) return res.status(400).send('Invalid board name');

  const {
    subject, comment, name,
  } = req.body;

  // TODO: make it so:
  // request is good <=> there's at least one nonwhitespace character in subject OR comment
  if (!subject && !comment) return res.status(400).send('No subject and comment');

  const initialPost = new ReplyModel({
    name, comment,
  });

  const thread = new ThreadModel({
    subject,
    replies: [initialPost],
    board: slug,
  });

  const result = await thread.save();
  const { _id } = result;

  // update the board
  const board = await BoardModel.findOne({ slug });
  board.threads.push(_id);
  await board.save();
  return res.send(result);
});

// post a reply to a thread
router.post('/:slug/:threadId', async (req: Request, res: Response) => {
  const { slug, threadId } = req.params;

  const { comment, name } = req.body;
  if (!comment) return res.status(400).send('No comment provided');

  const reply = new ReplyModel({
    comment, name,
  });

  const thread = await ThreadModel.findById(threadId);
  thread.replies.push(reply);
  const result = await thread.save();
  return res.send(reply);
});

export default router;
