const { Schema, model } = require("mongoose");

const destinationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // it's a String, but the String will appear in a string literal
    travelTime: {
        type: String,
        required: true,
    },
    // how many days on Earth it is on this destination
    dayLength: {
        type: String,
        require: true
    },
    // distance from earth
    distance: {
        type: String,
        require: true
    },
    // measured in days
    trainingTime: {
        type: String,
        require: true
    },
    // imageUrl: {
    //     type: String,
    //     required: true,
    // },
});

const Destination = model("Destination", destinationSchema);

module.exports = Destination;
