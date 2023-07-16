var express = require("express");
var router = express.Router();
const Users = require("../models/userSchema");

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

module.exports = router;
