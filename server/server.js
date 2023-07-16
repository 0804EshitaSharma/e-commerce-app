var express = require("express");
var cors = require("cors");
const ordersRouter = require("./routes/ordersRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const Order = require("./models/orderSchema");
const dotenv = require("dotenv");
const connectionString =
  "mongodb+srv://Elsie:uyIo6FPrdKKjA9Hz@cluster3.o7ort2o.mongodb.net/?retryWrites=true&w=majority";
//"mongodb+srv://<username>:<password>@cluster3.o7ort2o.mongodb.net/?retryWrites=true&w=majority";

dotenv.config();

const app = express();
var mongoose = require("mongoose");
app.use(express.json());

app.use(cors());

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Database Successfully connected"))
  .catch((error) => console.log(error));

app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/orders", ordersRouter);

app.post("/orders", async (req, res, next) => {
  const order = req.body;
  try {
    const newOrder = await Order.create(order);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5001, () => {
  console.log("Express Server Successfully Started");
});
