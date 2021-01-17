/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request as Req, Response as Res } from 'express';

import theads from '../data/threads';
import stats from '../data/stats';

const router = express.Router();

router.get('/stats', (req: Req, res: Res) => {
  res.send(stats);
});

router.get('/popular', (req: Req, res: Res) => {
  // for now we give 8 'random' posts. Maybe later just give 8 posts with the most replies?
  res.send(theads.slice(0, 8));
});

module.exports = router;
