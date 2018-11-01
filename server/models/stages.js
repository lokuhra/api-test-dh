const mongoose = require("mongoose");

const Stages = new mongoose.Schema(
  {
    name: {
      type: String
    },
    introduction: {
      type: String
    },
    brief: {
      type: String
    }
  },
  {
    collection: "stages"
  }
);

module.exports = mongoose.model("Stages", Stages);
