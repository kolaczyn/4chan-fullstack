import { Schema, model, Document } from 'mongoose';
import { ReplyDocument, ReplySchema } from './reply.model';

interface ThreadDocument extends Document {
  subject: String;
  board: String;
  replies: ReplyDocument[];
}

const ThreadSchema = new Schema({
  subject: String,
  board: String,
  replies: [ReplySchema],
});

ThreadSchema.method({});

ThreadSchema.static({});

const Thread = model<ThreadDocument>('Threads', ThreadSchema);

export default Thread;
export { ThreadSchema };
