var express = require("express");
var cors = require("cors");
const ordersRouter = require("./routes/ordersRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const Order = require("./models/orderSchema");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
var mongoose = require("mongoose");
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`App is listening on Port ${PORT}`);
    });
  })
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
