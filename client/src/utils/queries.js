import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      missions
    }
  }
`;

export const QUERY_ROCKET = gql`
query Rocket($id: ID!) {
  rocket(_id: $id) {
    name
    origin
    description
  }
}`

export const QUERY_ROCKETS = gql`
query Rocket {
  rockets {
    name
    origin
    description
  }
}
`
export const QUERY_DESTINATIONS = gql`
query Destinations {
  destinations {
    name
    travelTime
    dayLength
    distance
    trainingTime
  }
}
`

export const QUERY_MISSIONS = gql`
query Missions {
  missions {
    destination
    departureDate
    crewSize
  }
}
`