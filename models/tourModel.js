const mongoose = require("mongoose");

const tourShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  durations: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a group size"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
  },
  rating: {
    type: String,
    default: 4.5,
  },
  price: {
    type: String,
    required: [true, "A tour must have a price"],
  },
});

const Tour = mongoose.model("Tour", tourShema);

module.exports = Tour;
