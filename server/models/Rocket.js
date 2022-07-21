const { Schema, model } = require('mongoose');

const RocketSchema = new Schema(
  {
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