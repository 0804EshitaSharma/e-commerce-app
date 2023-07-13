var express = require("express");
var cors = require("cors");
const Items = require("./models/itemSchema");
const Users = require("./models/userSchema");
const CONNECTION_STRING =
  "mongodb+srv://eshitasharma0804:IzUT9IWmZeBNJbem@cluster3.o7ort2o.mongodb.net/?retryWrites=true&w=majority";

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
    var itemData = await Items.find({})
    res.status(200).send(itemData)
  } catch (err) {
    console.log(err)
  }
});


app.get("/:productId", async function (req, res, next) {});

app.get("/:userId", async (req, res, next) => {});

app.get("/user/:userId", async (req, res, next) => {
  try {
    const user = await Users.findOne(
      {
        _id: req.params.userId,
      }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
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
