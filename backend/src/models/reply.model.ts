import { Schema, model } from 'mongoose';

const ReplySchema = new Schema({
  replyId: Number,
  comment: String,
  name: { type: String, default: '' },
  createTime: { type: Date, default: Date.now },
});

ReplySchema.method({});

ReplySchema.static({});

const Reply = model('Replies', ReplySchema);

export default Reply;
export { ReplySchema };
