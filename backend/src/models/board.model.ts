import { Schema, model, Document } from 'mongoose';

interface BoardDocument extends Document {
  slug: String;
  name: String;
  threads: Schema.Types.ObjectId[];
}

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

const Board = model<BoardDocument>('Boards', BoardSchema);

export default Board;
export { BoardSchema };
