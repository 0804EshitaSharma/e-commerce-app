const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  deliveryOption: { type: String },
  createdAt: { type: Date, default: Date.now },
  user: { type: String },
  items: [
    {
      productDetails: {
        name: { type: String },
        description: { type: String },
        images: [{ type: String }],
        price: { type: Number },
        quantity: { type: Number },
        seller: { type: String },
      },
      quantity: { type: Number },
    },
  ],
});

module.exports = mongoose.model("orders", OrderSchema);
