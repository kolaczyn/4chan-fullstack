/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request, Response } from 'express';

import StatsModel from '../models/stats.model';

const router = express.Router();

router.get('/stats', async (req: Request, res: Response) => {
  const output = await StatsModel.findOne();
  res.send(output);
});

export default router;
