import express, { Request as Req, Response as Res, NextFunction as Next } from 'express';
const cors = require('cors')
const Joi = require('joi');
import dummyData, { Thread } from './dummyData';


const app = express();
app.use(express.json());
app.use(express.urlencoded())
// to allow frontend consume the api
// maybe configure it later
app.use(cors());

require('dotenv').config();

app.get('/api/threads', (req: Req, res: Res) => {
  res.send(dummyData);
})

app.get('/api/popular', (req: Req, res: Res) => {
  // for now we give 8 'random' posts. Maybe later just give 8 posts with the most replies?
  res.send(dummyData.slice(0, 8));
})

app.get('/api/threads/:board', (req: Req, res: Res) => {
  // we could first check if the requested board is valid
  const { board } = req.params;
  const output = dummyData.filter(thread => thread.board === board);
  if (!output) return res.status(404).send('Could not find any threads.');
  res.send(output);
})

app.get('/api/threads/:board/:id', (req: Req, res: Res) => {
  // we could first check if the requested board is valid
  const { board, id } = req.params;
  const output = dummyData.find(thread => (thread.board === board && thread.id === Number(id)))
  if (!output) return res.status(404).send('Could not find that thread.');
  res.send(output);
})

// create a thread
app.post('/api/threads/:board', (req: Req, res: Res) => {
  // later implement checking if board is valid
  const { board } = req.params;
  const { file, subject, comment } = req.body;

  // I should probably check if they're both an empty string,
  // request is good <=> there's at least one nonwhiespace charcter in subject+comment
  if (!subject && !comment) return res.status(400).send('No subject and comment');
  // for now we provide a default image if one is not provided
  const output: Thread = {
    board,
    id: (Math.random() * 1000000),
    file: file || 'default.png',
    subject,
    comment,
  }
  dummyData.push(output);
  res.send(output);
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
