const { AuthenticationError } = require('apollo-server-express');
const { User, missionSchema, Rocket, Destination } = require('../models');
const { signToken, authenticateToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        console.log('Here is MY user data: ', userData)
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    user: async (parent, { username }) => {
      console.log('🔍 Finding user: ', username);
      return User.findOne({ username })
        .select('-__v -password')
    },
    rockets: async (parent, args) => {
      const result = await Rocket.find({});
      console.log('ROCKETS', result);
      return result;
    },
    destinations: async (parent, args) => {
      const result = await Destination.find({});
      console.log('DESTINATIONS', result);
      return result;
    },
    users: async (parent, args) => {
      const result = await User.find({});
      console.log(result);
      return result;
    },   
    rockets: async (parent, args) => {
      const result = await Rocket.find({});
      console.log(result);
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log(`🆕 Here is the new ${user.username}'s signed token: `, token);

      return { token, user };
    },
    addMission: async (parent, { userid, missionInput }) => {
      const missionData = { destination: missionInput.destination, tripDuration: missionInput.tripDuration, departureDate: missionInput.departureDate }
      return User.findOneAndUpdate(
        { _id: userid },
        { $push: { missions: missionData } },
        { new: true }
      )
    }
  }
};

module.exports = resolvers;
