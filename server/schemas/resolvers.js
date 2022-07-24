const { AuthenticationError } = require('apollo-server-express');
const { User, Mission, Rocket } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        console.log('Here is MY user data: ', userData, '\n\n==============================================================')
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    user: async (parent, { username }) => {
      console.log('🔍 Finding user: ', username, '\n\n==============================================================');
      return User.findOne({ username })
        .select('-__v -password')
    },
    users: async (parent, args) => {
      console.log('🔍 Finding ALL users: ', '\n\n==============================================================');
      return User.find({})
        .select('-__v -password')
    },
    rockets: async (parent, args) => {
      const result = await Rocket.find({});
      console.log('ROCKETS', result, '\n\n==============================================================');
      return result;
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials! 🚫', '\n\n==============================================================');
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log('🔑 Here is the CORRECT password of the user that is logging in: ', correctPw, '\n\n==============================================================');

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password! 🚫', '\n\n==============================================================');
      }

      const token = signToken(user);
      console.log('🔑 The given LOGIN password was correct? ', token, '\n\n==============================================================');
      return { token, user };
    },
    missions: async () => {
      return Mission.find().sort({ createdAt: -1 });
    }
  }
};

module.exports = resolvers;
