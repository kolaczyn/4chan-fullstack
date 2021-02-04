import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import winston from 'winston';

import documentation from './routes/documentation';
import miscRoutes from './routes/misc';
import threadsRoutes from './routes/threads';

// import populateBoards from './populate/boards';
// import populateThreads from './populate/threads';
// import populateReplies from './populate/replies';

dotenv.config();
const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

mongoose
  .connect('mongodb://localhost/4chan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info('Connected to MongoDB...'))
  .catch((err: Error) => logger.info('Could not connect to MongoDB...', err));

// const populateDb = async () => {
//   // for some reason I have to uncomment the first line, run the app,
//   // comment the first line, undcomennt the second, etc
//   // otherwise I get some error which probably has something to do with race condition
//   // I don't see where does it come from, though

//   // await populateBoards();
//   // await populateThreads();
//   // await populateReplies();
// };
// populateDb();

const app = express();

app.set('view engine', 'pug');

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cors());

// I should rename it to /api/misc, but then I would have to update my frontend as well
app.use('/', documentation);
app.use('/api/threads', threadsRoutes);
app.use('/api/misc', miscRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Listening on port: ${PORT}`);
});
