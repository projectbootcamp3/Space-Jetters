const { AuthenticationError } = require('apollo-server-express');
const { User, Mission, Rocket, Destination } = require('../models');
const { signToken, authenticateToken } = require('../utils/auth');

const fakeDB = [
  {
    "mission": null
  }
];

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        console.log('Here is MY user data: ', userData)
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    user: async (_, { username }) => {
      console.log('🔍 Finding user: ', username);
      return User.findOne({ username })
        .select('-__v -password')
    },
    users: async (_, args) => {
      console.log('🔍 Finding ALL users: ');
      return User.find({})
        .select('-__v -password')
    },
    rocket: async (_, { rocketId }) => {
      return await Rocket.findOne({});
    },
    rockets: async (_, args) => {
      const result = await Rocket.find({});
      console.log('ROCKETS', result);
      return result;
    },
    destinations: async (_, args) => {
      const result = await Destination.find({});
      console.log('DESTINATIONS', result);
      return result;
    },
    missions: async (_, args) => {
      return Mission.find().sort({ createdAt: -1 });
    },
  },

  Mutation: {
    signup: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials! 🚫');
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log('🔑 The given LOGIN password was correct? ', correctPw);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password! 🚫');
      }

      const token = signToken(user);
      console.log(`🪙  Now ${user.username} has a SIGNED TOKEN to use: `, token);
      return { token, user };
    },
    addMission: async (_, args, context) => {
      if (context.user) {
        const mission = await Mission.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { missions: mission._id } },
          { new: true }
        );
        return mission;
      }
    }
  }
};

module.exports = resolvers;
