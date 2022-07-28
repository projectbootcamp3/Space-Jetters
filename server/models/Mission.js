const { Schema } = require("mongoose");

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
  }
});


module.exports = missionSchema;