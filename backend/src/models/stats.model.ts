const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  totalPosts: Number,
  currentUsers: Number,
  activeContent: String,
});

export default mongoose.model('Stats', statsSchema);
