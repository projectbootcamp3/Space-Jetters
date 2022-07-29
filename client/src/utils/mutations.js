import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _userId
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
        _userId
        username
      }
    }
  }
`;

export const CREATE_MISSION = gql`
  mutation CreateMission($destination: String!, $departureDate: String!, $crewSize: String!, $userId: ID!) {
    createMission(destination: $destination, departureDate: $departureDate, crewSize: $crewSize, userId: $userId) {
      destination
      departureDate
      crewSize
      userId
    }
  }
`;