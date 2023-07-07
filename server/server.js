var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");

const CONNECTION_STRING =
  "mongodb+srv://<user>:<password>@cluster3.o7ort2o.mongodb.net/?retryWrites=true&w=majority";

const app = express();

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

app.listen(5001, () => {
  console.log("Express Server Successfully Started");
});
