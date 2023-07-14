var express = require("express");
var cors = require("cors");
const Items = require("./models/itemSchema");
const Users = require("./models/userSchema");
const CONNECTION_STRING =
  "mongodb+srv://Danielle:8L4oyHRhSAiUaBXe@cluster3.o7ort2o.mongodb.net/?retryWrites=true&w=majority";

const app = express();
var mongoose = require("mongoose");
app.use(express.json());

app.use(cors());

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Database Successfully connected"))
  .catch((error) => console.log(error));

app.get("/products", async (req, res, next) => {
  try {
    console.log('req.query ' + req.query)
    const categoryParams = req.query.category
    const priceParams = req.query.price
    const ratingParams = req.query.rating

    var itemData = await Items.find({})

    if (categoryParams !== undefined) {
      console.log('req.query.category ' + categoryParams)
      var itemData = itemData.filter(item => categoryParams.includes(item.category))
    }

    if (priceParams !== undefined) {
      console.log('req.query.price ' + priceParams)
      var itemData = itemData.filter(item => {
          if (item.price < 25) {
            return priceParams.includes('Under$25')
        } else if (item.price >= 25 && item.price < 50) {
            return priceParams.includes('$25~$50')
        } else if (item.price >= 50 && item.price < 100) {
            return priceParams.includes('$50~$100')
        } else if (item.price >= 100 && item.price < 200) {
            return priceParams.includes('$100~$200')
        } else if (item.price > 200) {
            return priceParams.includes('Above$200')
        }
        return false
      })
    }

    if (ratingParams !== undefined) {
      console.log('req.query.rating ' + ratingParams)
      var itemData = itemData.filter(item => {
          if (item.rating < 1) {
            return ratingParams.includes('Below1')
        } else if (item.rating >= 1 && item.rating < 2) {
            return ratingParams.includes('1~2')
        } else if (item.rating >= 2 && item.rating < 3) {
            return ratingParams.includes('2~3')
        } else if (item.rating >= 3 && item.rating < 4) {
            return ratingParams.includes('3~4')
        } else if (item.rating > 4) {
            return ratingParams.includes('Above4')
        }
        return false
      })
    }
    
    
    res.status(200).send(itemData)
  } catch (err) {
    console.log(err)
  } 
});

app.get("/:productId", async function (req, res, next) {});

app.get("/:userId", async (req, res, next) => {});

app.post("/new", async function (req, res, next) {
  const item = req.body;
  try {
    const newItem = await Items.create(item);
    res.status(201).send(newItem);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete("/item/:itemId", async function (req, res, next) {
  try {
    const item = await Items.findOneAndDelete({
      _id: req.params.itemId,
    });
  } catch (e) {
    res.status(500);
  }
});
app.post("/user", async function (req, res, next) {
  const user = req.body;
  try {
    const newUser = await Users.create(user);
    res.status(201).send(newUser);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.patch("/user/:userId", async function (req, res, next) {
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $set: {
          useremail: req.body.useremail,
          mobile: req.body.mobile,
          address: req.body.address,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(5001, () => {
  console.log("Express Server Successfully Started");
});
