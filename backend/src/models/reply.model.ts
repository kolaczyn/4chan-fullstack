import { Schema, model, Document } from 'mongoose';

export interface ReplyDocument extends Document {
  comment: String;
  name: string;
  createTime: Date;
}

const ReplySchema = new Schema({
  comment: String,
  name: { type: String, default: '' },
  createTime: { type: Date, default: Date.now },
});

ReplySchema.method({});

ReplySchema.static({});

const Reply = model<ReplyDocument>('Replies', ReplySchema);

export default Reply;
export { ReplySchema };
