const { Schema, model } = require("mongoose");

const missionSchema = new Schema({
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
