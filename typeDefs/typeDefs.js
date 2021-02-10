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
  type Booking {
    _id: ID!
    name: String!
    user: User!
    vehicle: Vehicle!
    createdAt: String!
    updatedAt: String!
  }
  input BookingInput {
    name: String!
    user: ID!
    vehicle: ID!
  }
  type VehicleByID {
    _id: ID!
    name: String!
    description: String!
    availability: String
    isBooked: Boolean
    photos: [String]
    price: Float!
  }
  input VehicleByIDInput {
    vehicleID: ID!
  }
  type UserByID {
    _id: ID!
    name: String!
    email: String!
    password: String!
    phoneNumber: String!
    fullAddress: String!
  }
  input UserByIDInput {
    userID: ID!
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
    getVehicleByID(vechicleID: VehicleByIDInput): VehicleByID!
    getUserByID(userID: UserByIDInput): UserByID!
  }

  type Mutation {
    registerUser(userInput: UserInput): User
    addVehicle(vehicleInput: VehicleInput): Vehicle
    bookVehicle(bookingInput: BookingInput): Booking
    # cancelBooking(bookingID: ID!): Booking
  }
`;
module.exports = typeDefs;
