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

  type Destination {
    name: String
    distance: Int
  }

  input MissionInput {
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
    rocket(_id: ID!): Rocket
    rockets: [Rocket]
    missions: [Mission]
    getMission: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMission(input: MissionInput!): Mission
    signup(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
