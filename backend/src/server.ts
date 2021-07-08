import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import winston from 'winston';

import connectToDb from './dbUtils/connectToDb';
import documentation from './routes/documentation';
import miscRoutes from './routes/misc';
import threadsRoutes from './routes/threads';

dotenv.config();

const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

const app = express();

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

// I put it in async function to make sure I first connect
// to db, and then start the server
const startServer = async () => {
  await connectToDb();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    logger.info(`Listening on port: ${PORT}`);
  });
};

startServer();
