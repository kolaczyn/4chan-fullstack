import { Schema, model } from 'mongoose';
import { ReplySchema } from './reply.model';

const ThreadSchema = new Schema({
  subject: String,
  board: String,
  replies: [ReplySchema],
});

ThreadSchema.method({});

ThreadSchema.static({});

const Thread = model('Threads', ThreadSchema);

export default Thread;
export { ThreadSchema };
