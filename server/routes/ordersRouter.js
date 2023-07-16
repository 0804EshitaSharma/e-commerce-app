var express = require("express");
var router = express.Router();
const Orders = require("../models/ordersSchema");
const Item = require("../models/itemSchema");

router.get("/:userID", async function (req, res) {
  try {
    var userID = req.params.userID;
    const orders = await Orders.find({ user: userID });
    let modifiedOrders = [];
    for (const order of orders) {
      const itemsOrdered = await Item.find({
        _id: { $in: order.items },
      });
      let modOrder = {
        _id: order._id,
        date: order.date,
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

module.exports = router;
