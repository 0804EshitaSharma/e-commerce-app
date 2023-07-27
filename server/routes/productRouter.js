var express = require("express");
var router = express.Router();
const Items = require("../models/itemSchema");

router.get("/", async (req, res, next) => {
  try {
    const categoryParams = req.query.category;
    const priceParams = req.query.price;
    const ratingParams = req.query.rating;

    var itemData = await Items.find({});

    if (categoryParams !== undefined) {
      var itemData = itemData.filter((item) =>
        categoryParams.includes(item.category)
      );
    }

    if (priceParams !== undefined) {
      var itemData = itemData.filter((item) => {
        if (item.price < 25) {
          return priceParams.includes("Under$25");
        } else if (item.price >= 25 && item.price < 50) {
          return priceParams.includes("$25~$50");
        } else if (item.price >= 50 && item.price < 100) {
          return priceParams.includes("$50~$100");
        } else if (item.price >= 100 && item.price < 200) {
          return priceParams.includes("$100~$200");
        } else if (item.price > 200) {
          return priceParams.includes("Above$200");
        }
        return false;
      });
    }

    if (ratingParams !== undefined) {
      var itemData = itemData.filter((item) => {
        if (item.rating < 1) {
          return ratingParams.includes("Below1");
        } else if (item.rating >= 1 && item.rating < 2) {
          return ratingParams.includes("1~2");
        } else if (item.rating >= 2 && item.rating < 3) {
          return ratingParams.includes("2~3");
        } else if (item.rating >= 3 && item.rating < 4) {
          return ratingParams.includes("3~4");
        } else if (item.rating > 4) {
          return ratingParams.includes("Above4");
        }
        return false;
      });
    }

    res.status(200).send(itemData);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:category", async (req, res, next) => {
  const requestedCategory = req.params.category;
  try {
    const itemData = await Items.find({ category: requestedCategory });
    res.status(200).send(itemData);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

router.get("/:itemId", async function (req, res, next) {
  try {
    const item = await Items.find({
      _id: req.params.itemId,
    });
    res.status(200).json(item[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.patch("/:itemId", async function (req, res, next) {
  try {
    const updatedItem = await Items.findOneAndUpdate(
      { _id: req.params.itemId },
      {
        $set: {
          name: req.body.name,
          category: req.body.category,
          quantity: req.body.quantity,
          rating: req.body.rating,
          price: req.body.price,
          description: req.body.description,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedItem);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/", async function (req, res, next) {
  const item = req.body;
  try {
    const newItem = await Items.create(item);
    res.status(201).send(newItem);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete("/:itemId", async function (req, res, next) {
  try {
    const item = await Items.findOneAndDelete({
      _id: req.params.itemId,
    });
    res.status(200).json({ message: "Product deleted Successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
