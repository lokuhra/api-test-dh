const mongoose = require("mongoose");

const Products = new mongoose.Schema(
  {
    name: {
      type: String
    },
    price: {
      type: Number
    },
    margin: {
      type: Number
    },
    sold: {
      type: Number
    },
    stage: {
      type: String
    },
    picture: {
      type: String,
      data: Buffer
    }
  },
  {
    collection: "products"
  }
);

module.exports = mongoose.model("Products", Products);
