import  express, {Request as Req, Response as Res} from 'express';

import theads, { Thread } from '../data/threads';

const router = express.Router()

router.get('/', (req: Req, res: Res) => {
  res.send(theads);
})

router.get('/:board', (req: Req, res: Res) => {
  // we could first check if the requested board is valid
  const { board } = req.params;
  const output = theads.filter(thread => thread.board === board);
  if (!output) return res.status(404).send('Could not find any threads.');
  res.send(output);
})

router.get('/:board/:id', (req: Req, res: Res) => {
  // we could first check if the requested board is valid
  const { board, id } = req.params;
  const output = theads.find(thread => (thread.board === board && thread.id === Number(id)))
  if (!output) return res.status(404).send('Could not find that thread.');
  res.send(output);
})


// create a thread
router.post('/:board', (req: Req, res: Res) => {
  // later implement checking if board is valid
  const { board } = req.params;
  const { file, subject, comment, isARobot } = req.body;

  // TODO: make it so:
  // request is good <=> there's at least one nonwhitespace character in subject OR comment
  if (!subject && !comment) return res.status(400).send('No subject and comment');
  // for now we provide a default image if one is not provided
  const output: Thread = {
    board,
    id: (Math.random() * 1000000),
    subject,
    comment,
    ext: '',
  }
  theads.push(output);
  res.send(output);
})

module.exports = router;