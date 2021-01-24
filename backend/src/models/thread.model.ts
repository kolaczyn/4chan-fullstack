import { Schema, model } from 'mongoose';
import { ReplySchema } from './reply.model';

const ThreadSchema = new Schema({
  subject: String,
  initialPost: ReplySchema,
  replies: { type: [ReplySchema], default: [] },
});

ThreadSchema.method({});

ThreadSchema.static({});

const Thread = model('Theads', ThreadSchema);

export default Thread;
export { ThreadSchema };
