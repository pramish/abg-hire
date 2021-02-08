const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    phoneNumber: String!
    fullAddress: String!
  }
  input UserInput {
    name: String!
    phoneNumber: String!
    fullAddress: String!
    email: String!
    password: String!
  }
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    users: [User]!
    login(loginInput: LoginInput): AuthData!
  }

  type Mutation {
    registerUser(userInput: UserInput): User
  }
`;
module.exports = typeDefs;
