/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request, Response } from 'express';

import slugToName from '../const/slugToName.json';
import ThreadModel from '../models/thread.model';

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

router.get('/:board', async (req: Request, res: Response) => {
  const { board } = req.params;
  if (!(board in slugToName)) return res.status(400).send('Invalid board name');

  const threads = await ThreadModel.find({ board });
  return res.send(threads);
});

router.get('/:board/:id', async (req: Request, res: Response) => {
  const { board, id } = req.params;
  if (!(board in slugToName)) return res.status(400).send('Invalid board name');

  const thread = await ThreadModel.findOne({ board, id });
  if (!thread) return res.status(404).send('Thread not found');
  return res.send(thread);
});

router.post('/:board', async (req: Request, res: Response) => {
  const { board } = req.params;
  // I use this exact line of code in few other places
  // TODO see if there's a way to fix that
  if (!(board in slugToName)) return res.status(400).send('Invalid board name');

  const {
    subject, comment,
  } = req.body;

  // TODO: make it so:
  // request is good <=> there's at least one nonwhitespace character in subject OR comment
  if (!subject && !comment) return res.status(400).send('No subject and comment');

  // for now I autoincrement id number.
  // will have to find a more optimal way of doing this
  const allThreads = await ThreadModel.find({ board });
  const id = allThreads.length + 1;

  const thread = new ThreadModel({
    board,
    id,
    subject,
    comment,
    ext: '',
  });

  const result = await thread.save();
  return res.send(result);
});

export default router;
