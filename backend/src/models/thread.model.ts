import mongoose from 'mongoose';

const threadSchema = new mongoose.Schema({
  board: String,
  ext: String,
  subject: String,
  comment: String,
  id: Number,
});

export default mongoose.model('Thread', threadSchema);
