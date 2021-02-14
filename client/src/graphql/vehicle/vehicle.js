import { gql } from "graphql-request";
export const vehicleQuery = gql`
  query {
    vehicles {
      _id
      name
      description
      availability
      price
      isBooked
    }
  }
`;
export const getVehicleByID = gql`
  query getVehicleByID($vehicleID: String!) {
    getVehicleByID(vechicleID: { vehicleID: $vehicleID }) {
      _id
      name
      description
      availability
      isBooked
      price
    }
  }
`;
