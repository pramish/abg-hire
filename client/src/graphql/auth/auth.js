import { gql } from "graphql-request";

const loginQuery = gql`
  query {
    login(
      loginInput: { $email: String!, $password: String! }
    ) {
      userId
      token
      tokenExpiration
    }
  }
`;

const registerQuery = gql`
  mutation {
    registerUser(
      userInput: {
        $email: String!
        $name: String!
        $phoneNumber: String!
        $fullAddress: String!
        $password: String!
      }
    ) {
      _id
      name
      email
      phoneNumber
      fullAddress
    }
  }
`;
