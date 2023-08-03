var express = require("express");
var router = express.Router();
const Orders = require("../models/orderSchema");
const Item = require("../models/itemSchema");
const Users = require("../models/userSchema");

router.get("/:userID", async function (req, res) {
  try {
    var userID = req.params.userID;
    const ordersList = await Users.findOne(
      { _id: userID },
      { orders: 1, _id: 0 }
    );
    const orders = await Orders.find({ _id: { $in: ordersList.orders } });
    let modifiedOrders = [];
    for (const order of orders) {
      let itemsOrdered = [];
      for (const item of order.items) {
        itemsOrdered.push(item.productDetails);
      }
      let modOrder = {
        _id: order._id,
        createdAt: order.createdAt,
        user: order.user,
        items: itemsOrdered,
      };
      modifiedOrders.push(modOrder);
    }
    return res.send(modifiedOrders).status(200);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res, next) => {
  const order = req.body;
  try {
    const newOrder = await Orders.create(order);

    const userId = req.body.user;

    const user = await Users.findById(userId);
    user.orders.push(newOrder._id);
    await user.save();

    console.log("user's orders:", user.orders);

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:orderID", async function (req, res) {
  try {
    await Orders.findOneAndDelete({
      _id: req.params.orderID,
    });
    res.status(200).json({ message: "order returned Successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
