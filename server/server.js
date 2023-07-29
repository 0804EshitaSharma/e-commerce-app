var express = require("express");
var cors = require("cors");
const ordersRouter = require("./routes/ordersRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const dotenv = require("dotenv");
var mongoose = require("mongoose");
dotenv.config();
const connectionString =
  "mongodb+srv://Elsie:IE3BaeHwNzWeZP7u@e-commerce-app.qqpcp4c.mongodb.net/e-commerce-app?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const PORT = 6001;
    app.listen(PORT, () => {
      console.log(`App is listening on Port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/orders", ordersRouter);
