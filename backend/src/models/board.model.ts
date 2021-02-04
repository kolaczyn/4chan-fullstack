import { Schema, model } from 'mongoose';

const BoardSchema = new Schema({
  slug: String,
  name: String,
  threads: {
    default: [],
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Threads',
      },
    ],
  },
});

BoardSchema.method({});

BoardSchema.static({});

const Board = model('Boards', BoardSchema);

export default Board;
export { BoardSchema };
