const { Schema, model } = require('mongoose');

const rocketSchema = new Schema(
  {
    rocketId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
);

const Rocket = model('Rocket', rocketSchema);

module.exports = Rocket;