const mongoose = require("mongoose");

const recordModel = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    note: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("recordSchema", recordModel);
