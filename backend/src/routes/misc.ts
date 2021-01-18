/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request as Req, Response as Res } from 'express';

import StatsModel from '../models/stats.model';

const router = express.Router();

router.get('/stats', async (req: Req, res: Res) => {
  const output = await StatsModel.findOne();
  res.send(output);
});

module.exports = router;
