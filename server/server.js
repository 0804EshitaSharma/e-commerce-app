var express = require("express");
var cors = require("cors");
const ordersRouter = require("./routes/ordersRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
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
app.use("/orders", ordersRouter);

app.post("/order", async (req, res, next) => {
  const order = req.body;
  console.log("Received order data on the server:", order);
  try {
    const newOrder = await Orders.create(order);
    // const userId = req.body.user;
    // const validUserId = mongoose.Types.ObjectId(userId);
    // const user = await Users.findById(validUserId);
    // user.orders.push(newOrder._id);
    // await user.save();
    console.log("New order created:", newOrder);
    // console.log("user's orders:", user.orders);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5001, () => {
  console.log("Express Server Successfully Started");
});
