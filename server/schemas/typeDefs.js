const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    missions: [Mission]
  }

  type Rocket {
    rocketId: Int
    name: String
    origin: String
    description: String
    imageUrl: String
  }

  type Mission {
    _id: ID
    destination: Destination
    departureDate: String
    crewSize: Int
    owner: User
  }

  input MissionInput {
    ownerInput: ownerInput
    destination: String
    departureDate: String
    crewSize: Int
  }

  input destinationInput {
    name: String
  }

  input ownerInput {
    username: String
  }

  type Destination {
    name: String
    travelTime: String
    dayLength: String
    distance: String
    trainingTime: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    rocket(rocketId: Int!): Rocket
    rockets: [Rocket]
    mission: Mission
    missions: [Mission]
    destinations: [Destination]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addMission(missionInput: MissionInput!): Mission
    signup(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
