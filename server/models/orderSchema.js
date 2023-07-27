const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    // user: { type: Schema.Types.ObjectId, ref: "User" },
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

console.log("OrderSchema definition:", OrderSchema);
module.exports = mongoose.model("Order", OrderSchema);