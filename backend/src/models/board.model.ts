import { Schema, model } from 'mongoose';
import { ThreadSchema } from './thread.model';

const BoardSchema = new Schema({
  slug: String,
  name: String,
  threads: {
    type: [ThreadSchema],
    default: [],
  },
});

BoardSchema.method({});

BoardSchema.static({});

const Board = model('Boards', BoardSchema);

export default Board;
export { BoardSchema };
