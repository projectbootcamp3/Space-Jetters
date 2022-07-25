const { Destination } = require('../models');

module.exports = {
    // get all destinations of a USER
    async getMyDestinations(req, res) {
        const myDestinations = await D

    },
    async getDestinationById(req, res) {

    },
    // get all destinations in the DB
    async getDestinations(req, res) {
        res.json({ message: 'here are the destinations' })
    },
}