const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availablity: {
    type: String,
    default: "",
  },
  photos: {
    type: [String],
    default: [""],
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
});

module.exports = Vehicle = mongoose.model("Vehicle", vehicleSchema);
