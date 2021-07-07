import mongoose, { Document } from 'mongoose';

interface StatsDocument extends Document {
  totalPosts: Number;
  currentUsers: Number;
  activeContent: String;
}

const statsSchema = new mongoose.Schema({
  totalPosts: Number,
  currentUsers: Number,
  activeContent: String,
});

export default mongoose.model<StatsDocument>('Stats', statsSchema);
