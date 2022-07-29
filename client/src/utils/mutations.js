import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MISSION = gql`
  mutation Mutation($missionInput: MissionInput!, $userId: ID!) {
    addMission(missionInput: $missionInput, userId: $userId) {
      missions {
        departureDate
      }
    }
  }
`;

export const CREATE_MISSION = gql`
  mutation CreateMission($destination: String!, $departureDate: String!, $crewSize: String!, $id: ID!) {
    createMission(destination: $destination, departureDate: $departureDate, crewSize: $crewSize, id: $id) {
      id
      user {
        username
      }
    }
  }
`;

export const UPDATE_USER_MISSIONS = gql`
mutation Mutation($missionInput: MissionInput!, $userId: ID!) {
    addMission(missionInput: $missionInput, userId: $userId) {
      missions {
        departureDate
      }
    }
  }
`;