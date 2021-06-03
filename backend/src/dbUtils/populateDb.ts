// populates the db with some dummy data

import dotenv from 'dotenv';

import connectToDb from './connectToDb';
import populateBoards from '../populate/boards';
// import populateThreads from '../populate/threads';
// import populateReplies from '../populate/replies';
import populateStats from '../populate/stats';

dotenv.config();

const populateDb = async () => {
  await connectToDb();

  await populateBoards();
  await populateStats();
  // await populateThreads();
  // await populateReplies();
};

populateDb();
