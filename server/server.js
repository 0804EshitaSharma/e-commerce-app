var express = require("express");
var cors = require("cors");
const Items = require("./models/itemSchema");

const CONNECTION_STRING =
  "mongodb+srv://<user>:<password>@cluster3.o7ort2o.mongodb.net/?retryWrites=true&w=majority";

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

app.get("/products", async (req, res, next) => {});

app.get("/:productId", async function (req, res, next) {});

app.get("/:userId", async (req, res, next) => {});

app.post("/new", async function (req, res, next) {
  const item = req.body;
  console.error("item" + item);
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

app.listen(5001, () => {
  console.log("Express Server Successfully Started");
});
