var express = require("express");
var router = express.Router();
const Users = require("../models/userSchema");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

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
    const user = req.body;
    const message = {
      to: user.useremail,
      from: "eshitasharma0804@gmail.com",
      subject: "Order Confirmation",
      text: `Thank You ${user.firstname}for Shopping with us! `,
      html: `<p>Hello</p>`,
    };
    await sgMail.send(message);
    res.status(200).json({ message: "Send Email" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;