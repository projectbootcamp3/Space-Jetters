const { Schema, model } = require("mongoose");

const missionSchema = new Schema({
  destination: {
    type: String,
    required: true,
  },
  departureDate: {
    type: String,
    required: true,
  },
  tripDuration: {
    type: String,
    required: true,
  },
  // imageUrl: {
  //   type: String,
  //   required: true,
  // },
});

const Mission = model("Mission", missionSchema);

module.exports = Mission;
