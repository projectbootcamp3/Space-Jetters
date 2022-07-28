const { AuthenticationError } = require('apollo-server-express');
const { User, Mission, Rocket, Destination } = require('../models');
const { update } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .then(data => res.json(data))
          .select('-__v -password')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
    rockets: async (parent, args) => {
      const result = await Rocket.find({});
      console.log(result);
      return result;
    },
    users: async (parent, args) => {
      const result = await User.find({});
      console.log(result);
      return result;
    },
    destinations: async (parent, args) => {
      const result = await Destination.find({});
      console.log(' <><><><><><><><><><><><><>🪐<><><><><><><><><><><><>\n\nDESTINATIONS', result, ' <><><><><><><><><><><><>🪐<><><><><><><><><><><><>');
      return result;
    },
    rocket: async (parent, { name }) => {
      return Rocket.findOne({ name })
    },
    mission: async (parent, { _id }) => {
      return Mission.findOne({ _id })
    },
    missions: async () => {
      return Mission.find({})
    }
  },

  Mutation: {
    signup: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addMission: async (parent, { missionId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { missions: missionId } },
          { new: true }
        ).populate('missions');
        console.log('UPDATED USER: ', updatedUser)
        return updatedUser;
      }
    }
  }
}

module.exports = resolvers;
