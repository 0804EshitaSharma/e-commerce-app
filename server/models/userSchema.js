const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  _id: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  useremail: { type: String },
  userpassword: { type: String },
  mobile: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("users", UserSchema);
