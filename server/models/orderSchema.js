const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: {
    city: { type: String },
    zipcode: { type: String },
    province: { type: String },
    country: { type: String },
  },
  deliveryOption: { type: String },
  items: [
    {
      name: { type: String },
      description: { type: String },
      images: [{ type: String }],
      price: { type: Number },
      quantity: { type: Number },
      seller: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
