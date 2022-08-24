const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
});

const product = mongoose.model("product", productSchema);
module.exports = product;
