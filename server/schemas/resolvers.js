const { AuthenticationError } = require('apollo-server-express');
const { User, Mission, Rocket } = require('../models');
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
    users: async (parent, args) => {
      console.log('🔍 Finding ALL users: ');
      return User.find({})
        .select('-__v -password')
    },
    rockets: async (parent, args) => {
      const result = await Rocket.find({});
      console.log('ROCKETS', result);
      return result;
    },
    // getDestinations(_, { req }) {
    //   let token;
    //   try {
    //     token = jwt.verify(req.request.headers.authorization, process.env.ACCESS_TOKEN_SECRET);
    //   } catch (e) {
    //     return null;
    //   }
    //   console.log(token);
    //   return token;
    // }
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
      console.log('🪙  Now the user has a SIGNED TOKEN to use ', token);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log(`🆕 Here is the new ${user.username}'s signed token: `, token);

      return { token, user };
    },
    missions: async () => {
      return Mission.find().sort({ createdAt: -1 });
    }
  }
};

module.exports = resolvers;
