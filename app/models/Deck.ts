import mongoose from 'mongoose';

export default mongoose.model('Decks', new mongoose.Schema({
  name: String,
  cards: [ {
    id: String,
    name: String,
    imageUrl: String,
    types: [String],
  } ],
  types: [String],
}));
