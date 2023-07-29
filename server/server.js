var express = require("express");
var cors = require("cors");
const Items = require("./models/itemSchema");
const Users = require("./models/userSchema");
// const Orders = require("./models/orderSchema");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const Order = require("./models/orderSchema");
const ordersRouter = require("./routes/ordersRouter");
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
app.use("/order", ordersRouter);

// app.post("/orders", async (req, res, next) => {
//   const order = req.body;
//   try {
//     const newOrder = await Order.create(order);
//     res.status(201).json(newOrder);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
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
    res.status(200).json({ message: "Product deleted Successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
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
          firstname: req.body.firstname,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// app.post("/order", async (req, res, next) => {
//   const order = req.body;
//   console.log("Received order data on the server:", order);
//   try {
//     const newOrder = await Orders.create(order);
//     const userId = req.body.user;
//     const validUserId = mongoose.Types.ObjectId(userId);
//     const user = await Users.findById(validUserId);
//     user.orders.push(newOrder._id);
//     await user.save();
//     console.log("New order created:", newOrder);
//     console.log("user's orders:", user.orders);
//     res.status(201).json(newOrder);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
