const { Schema, model } = require("mongoose");

const destinationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // it's a number, but the number will appear in a string literal
    tripDuration: {
        type: Number,
        required: true,
    },
    // how many days on Earth it is on this destination
    dayLength: {
        type: Number,
        require: true
    },
    // distance from earth
    distFromEarth: {
        type: Number,
        require: true
    },
    // measured in days
    lengthOfTraining: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Destination = model("Destination", destinationSchema);

module.exports = Destination;
