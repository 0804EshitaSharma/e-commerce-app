const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  images: { type: Array },
  price: { type: Number },
  quantity: { type: Number },
  seller: { type: String },
  category: { type: String },
  rating: { type: Number },
});

module.exports = mongoose.model("items", ItemSchema);
