import express, {Request as Req, Response as Res} from 'express'
import dummyData from './dummyData.json'

const app = express()
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

app.post('/api/threads/:board', (req: Req, res: Res)=> {

})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
