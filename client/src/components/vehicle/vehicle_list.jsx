import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Image, SimpleGrid } from "@chakra-ui/react";
import "./vehicle_list.css";
import GraphQlClient from "../../graphql/api";
import { vehicleQuery } from "../../graphql/vehicle/vehicle";

const VehicleList = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  useEffect(() => {
    GraphQlClient.request(vehicleQuery).then((data) => {
      setAllVehicles(data.vehicles);
    });
  }, []);
  return (
    <div className="vehicleContainer">
      {allVehicles.map((eachVehicle) => (
        <SimpleGrid
          key={eachVehicle._id}
          column={3}
          minChildWidth="20px"
          spacing="20px"
        >
          <Box bg="whitesmoke" height="300px">
            <div className="itemContainer">
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
              />
              <p>Name: {eachVehicle.name}</p>
              <p>Description: {eachVehicle.description}</p>
              <p>Available from: {eachVehicle.availability}</p>
              <p>Price: {eachVehicle.price}</p>
              <p>Booked: {eachVehicle.isBooked ? "Booked" : "Available"}</p>
              <Link to={"/" + eachVehicle._id}>
                <Button colorScheme="teal" variant="outline">
                  Select
                </Button>
              </Link>
            </div>
          </Box>
        </SimpleGrid>
      ))}
    </div>
  );
};
export default VehicleList;
