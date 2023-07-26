var express = require("express");
var router = express.Router();
const Users = require("../models/userSchema");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();
sgMail.setApiKey(process.env.API_KEY);

router.get("/:userId", async (req, res, next) => {
  try {
    const user = await Users.findOne({
      _id: req.params.userId,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async function (req, res, next) {
  const user = req.body;
  try {
    const newUser = await Users.create(user);
    res.status(201).send(newUser);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.patch("/:userId", async function (req, res, next) {
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
router.post("/mail", async function (req, res, next) {
  try {
    const userObject = req.body.user;
    const orderInfo = req.body.orderInfo;
    const listItems = orderInfo.map(
      (order) =>
        `<li>${order.productDetails.name} : ${order.productDetails.price*order.productDetails.quantity}</li>`
    );
    const message = {
      from: "eshitasharma0804@gmail.com",
      to: `${userObject.useremail}`,
      subject: "Order Confirmation",
      text: `Hello ${userObject.firstname} from E-Commerce Team`,
      html: `
      <div>
      <h4>Hello ${userObject.firstname} </h4>
      <h3>Please confirm Your order!</h3>
      <ol>${listItems}</ol>
      <h4>Deliever to :${userObject.address} <h4>
      <h4>Thank you for shopping with us! </h4>
      <h4> E-Commerce Team </h4>
      </div>`,
    };
    sgMail.send(message).catch((e) => console.log(e.message));
    res.status(200).send("Email Sent");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
