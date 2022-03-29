const mongoose = require("mongoose");

//Defining your schema
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});
//Model
const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
