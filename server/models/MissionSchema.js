const { Schema, model } = require("mongoose");

const missionSchema = new Schema({
  destination: {
    type: String,
    required: true
  },
  departureDate: {
    type: String,
    required: true,
  },
  crewSize: {
    type: Number,
    required: true,
  },
});

module.exports = missionSchema;
