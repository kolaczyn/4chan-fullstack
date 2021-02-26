import express, { Request, Response } from 'express';

import slugToName from '../const/slugToName.json';
import ThreadModel from '../models/thread.model';
import ReplyModel from '../models/reply.model';
import BoardModel from '../models/board.model';

const router = express.Router();

const checkIfBoardExists = (
  req: Request,
  res: Response,
) => {
  const { slug } = req.params;
  if (!(slug in slugToName)) return res.status(400).send('Invalid board name');
};

router.get('/', async (req: Request, res: Response) => {
  const allThreads = await ThreadModel.find();
  res.send(allThreads);
});

router.get('/popular', async (req: Request, res: Response) => {
  // for now we give 8 'random' posts. Maybe later just give 8 posts with the most replies?
  const popularThreads = await ThreadModel.find().limit(8);

  return res.send(popularThreads);
});

router.get('/:slug', async (req: Request, res: Response) => {
  checkIfBoardExists(req, res);
  const { slug } = req.params;

  const board = await BoardModel.findOne({ slug }).populate('threads');

  return res.send(board);
});

router.get('/:slug/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const thread = await ThreadModel.findById(id);
    if (!thread) return res.status(404).send('Thread not found');
    return res.send(thread);
  } catch (ex) {
    return res.status(400).send('Invalid board id');
  }
});

// post a thread
router.post('/:slug', async (req: Request, res: Response) => {
  checkIfBoardExists(req, res);
  const { slug } = req.params;

  const { subject, comment, name } = req.body;

  if (!subject && !comment) {
    return res.status(400).send('No subject and comment');
  }

  const initialPost = new ReplyModel({
    name,
    comment,
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
  checkIfBoardExists(req, res);
  const { threadId } = req.params;

  const { comment, name } = req.body;
  if (!comment) return res.status(400).send('No comment provided');

  const reply = new ReplyModel({
    comment,
    name,
  });

  const thread = await ThreadModel.findById(threadId);
  thread.replies.push(reply);
  await thread.save();

  return res.send(reply);
});

export default router;
