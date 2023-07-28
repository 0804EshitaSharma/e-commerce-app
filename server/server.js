var express = require("express");
var cors = require("cors");
const ordersRouter = require("./routes/ordersRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const ordersRouter = require("./routes/ordersRouter");
const dotenv = require("dotenv");
var mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

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
app.use("/order", ordersRouter);

app.post("/orders", async (req, res, next) => {
  const order = req.body;
  try {
    const newOrder = await Order.create(order);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
