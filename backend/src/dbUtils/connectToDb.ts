import mongoose from 'mongoose';

export default () => {
  const mongodbUri = process.env.MONGODB_URI;
  if (mongodbUri === undefined) throw new Error('MongoDB URI not defined as an environment variable!');

  mongoose
    .connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err: Error) => console.log('Could not connect to MongoDB...', err));
};
