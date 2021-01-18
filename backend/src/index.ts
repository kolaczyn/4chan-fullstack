/* eslint-disable import/no-unresolved */
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/4chan', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to MongoDB...')).catch((err: Error) => console.error('Could not connect to MongoDB...', err));

const documentation = require('./routes/documentation');
const miscRoutes = require('./routes/misc');
const threadsRoutes = require('./routes/threads');

require('dotenv').config();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
