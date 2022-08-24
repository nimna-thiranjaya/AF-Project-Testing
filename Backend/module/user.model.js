const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  wishlist: [
    {
      pid: {
        type: String,
        required: true,
      },
      pname: {
        type: String,
        required: true,
      },
      unitPrice: {
        type: String,
        required: true,
      },
    },
  ],
});

const user = mongoose.model("user", userSchema);
module.exports = user;
