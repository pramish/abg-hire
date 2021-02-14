import { gql } from "graphql-request";

export const loginQuery = gql`
  query login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      userId
      token
      tokenExpiration
    }
  }
`;
export const registerQuery = gql`
  mutation registerUser(
    $email: String!
    $password: String!
    $name: String!
    $phoneNumber: String!
    $fullAddress: String!
  ) {
    registerUser(
      userInput: {
        email: $email
        password: $password
        name: $name
        phoneNumber: $phoneNumber
        fullAddress: $fullAddress
      }
    ) {
      name
      email
      phoneNumber
      fullAddress
    }
  }
`;
export const confirmAccountQuery = gql`
  mutation confirmAccount($token: String!) {
    confirmAccount(confirmAccountInput: { token: $token }) {
      message
    }
  }
`;
