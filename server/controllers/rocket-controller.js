// import rocket model
const { Rocket } = require('../models');

module.exports = {

    // get a single rocket by either their id or their name
    async getRockets(req, res) {
        console.log('🚀 All rockets:', res);
        return Rocket.find({});
    },
    async getSingleRocket({ rocket = null, params }, res) {
        console.log('🚀 Rocket:', rocket);
        const foundRocket = await Rocket.findOne({
            $or: [{ _id: rocket ? rocket._id : params.id }, { name: params.name }],
        });

        if (!foundRocket) {
            return res.status(400).json({ message: 'Cannot find a rocket with this id! 🚫' });
        }

        res.json(foundRocket);
        console.log('🧑‍🚀 Found rocket:', foundRocket);
    },
};
