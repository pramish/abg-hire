const mongoose = require("mongoose");
const tokenSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = Token = mongoose.model("Token", tokenSchema);
