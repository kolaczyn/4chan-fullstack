import express, { Request as Req, Response as Res, NextFunction as Next } from 'express';
const cors = require('cors');
const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const helmet = require('helmet');
const morgan = require('morgan');
const marked = require('marked');

const documentation = require('./routes/documentation')
const miscRoutes = require('./routes/misc');
const threadsRoutes = require('./routes/threads')

require('dotenv').config();
const app = express();

app.set('view engine', 'pug')

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled');
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cors());

// I should rename it to /api/misc, but then I would have to update my frontend as well
app.use('/', documentation)
app.use('/api/threads', threadsRoutes)
app.use('/api/misc', miscRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
