const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  createdAt: { type: String },
  user: { type: String },
  items: { type: Array },
});

module.exports = mongoose.model("orders", OrderSchema);
