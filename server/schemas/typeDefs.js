const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Rocket {
    _id: ID
    name: String
    origin: String
    description: String
    imageUrl: String
  }

  type Mission {
    _id: ID
    destination: String
    departureDate: String
    tripDuration: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    rockets: [Rocket]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    missions(destination: String!, password: String!): [Mission]
  }
`;

module.exports = typeDefs;
