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
  type Vehicle {
    _id: ID!
    name: String!
    description: String!
    availability: String
    isBooked: Boolean
    photos: [String]
    price: Float!
  }
  input VehicleInput {
    name: String!
    description: String!
    availability: String
    isBooked: Boolean
    photos: [String]
    price: Int!
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
    vehicles: [Vehicle]!
    login(loginInput: LoginInput): AuthData!
  }

  type Mutation {
    registerUser(userInput: UserInput): User
    addVehicle(vehicleInput: VehicleInput): Vehicle
  }
`;
module.exports = typeDefs;
