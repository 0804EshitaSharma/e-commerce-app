var express = require("express");
var router = express.Router();
const Orders = require("../models/ordersSchema");
const Item = require("../models/itemSchema");

router.get("/:userID", async function (req, res) {
  try {
    var userID = req.params.userID;
    const orders = await Orders.find({ user: userID });
    orders.forEach(async (order) => {
      let itemIDs = order.items;
      let itemIDsInSearchFormat = [];
      itemIDs.forEach((itemID) => {
        let searchFormatItemID = {
          _id: itemID,
        };
        itemIDsInSearchFormat.push(searchFormatItemID);
      });
      const itemsOrdered = await Item.find({ $or: itemIDsInSearchFormat });
      order.products = itemsOrdered;
    });
    return res.send(orders).status(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
