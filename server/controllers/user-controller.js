// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {

    // get a single user by either their id or their username
    async getSingleUser({ user = null, params }, res) {
        console.log('🧑‍🚀 User:', user);
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id! 🚫' });
        }

        res.json(foundUser);
        console.log('🧑‍🚀 Found user:', foundUser);
    },

    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createUser({ body }, res) {
        const user = await User.create(body);
        console.log('🧑‍🚀 User:', user);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    // {body} is destructured req.body
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user 🤔" });
        }

        // store the correct password (passed through the body) if the password IS correct
        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password! 🚫' });
        }
        // Returns the jsonwebtoken as a string
        const token = signToken(user);
        res.json('This is the response JSON:', { token, user });
        console(`=========== 🪙 Token:`, token, ' =========== ', `🧑‍🚀 User: `, user, ' ===========');
    },

    // save a destination to a user's `savedDestinations` field by adding it to the set (to prevent duplicates)
    // user comes from `req.user` created in the auth middleware function

    // NOTE: Connects with ../../client/src/pages/Destinations.js
    async saveDestination({ user, body }, res) {
        console.log('🧑‍🚀 User:', user);
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedDestinations: body } },
                { new: true, runValidators: true }
            );
            console.log(`🧑‍🚀 ${user} saved a destination! 🚀`);
            return res.json(updatedUser);
        } catch (err) {
            console.log(`💥`, err);
            return res.status(400).json(err);
        }
    },

    // remove a destination from `savedDestinations`
    // NOTE: Connects with ../../client/src/pages/Destinations.js
    async deleteDestination({ user, params }, res) {
        console.log('🧑‍🚀 User:', user);
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedDestinations: { bookId: params.bookId } } },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "Couldn't find user with this id!" });
        }
        console.log(`🧑‍🚀 ${user} deleted a destination! 🕳`);
        return res.json(updatedUser);
    },
};
