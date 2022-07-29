const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    missions: [Mission]
  }

  type Rocket {
    _id: ID
    name: String
    origin: String
    description: String
  }

  type Mission {
    _id: ID
    departureDate: String
  }

  type Destination {
    name: String
    travelTime: String
    dayLength: String
    distance: String
    trainingTime: String
  }

  input MissionInput {
    departureDate: String
    crewSize: Int
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
    mission(_id: ID!): Mission
    destinations: [Destination]
    getMission: String
    getUserMissions(userId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMission(missionInput: MissionInput!, userId: ID!): User
    createMission(destination: String!, departureDate: String!, crewSize: String!, userId: ID!): User
    signup(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
