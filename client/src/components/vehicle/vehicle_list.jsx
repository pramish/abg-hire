import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Center, Image, Wrap, WrapItem } from "@chakra-ui/react";
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
      <Wrap>
        <WrapItem>
          {allVehicles.map((eachVehicle) => (
            <Center w="180px" h="400px" bg="red.200">
              <div className="itemContainer">
                <Image
                  borderRadius="md"
                  boxSize="150px"
                  src="https://bit.ly/sage-adebayo"
                  alt={eachVehicle.name}
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
            </Center>
          ))}
        </WrapItem>
        <WrapItem>
          {allVehicles.map((eachVehicle) => (
            <Center w="180px" h="400px" bg="red.200">
              <div className="itemContainer">
                <Image
                  borderRadius="md"
                  boxSize="150px"
                  src="https://bit.ly/sage-adebayo"
                  alt={eachVehicle.name}
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
            </Center>
          ))}
        </WrapItem>
        <WrapItem>
          {allVehicles.map((eachVehicle) => (
            <Center w="180px" h="400px" bg="red.200">
              <div className="itemContainer">
                <Image
                  borderRadius="md"
                  boxSize="150px"
                  src="https://bit.ly/sage-adebayo"
                  alt={eachVehicle.name}
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
            </Center>
          ))}
        </WrapItem>
        <WrapItem>
          {allVehicles.map((eachVehicle) => (
            <Center w="180px" h="400px" bg="red.200">
              <div className="itemContainer">
                <Image
                  borderRadius="md"
                  boxSize="150px"
                  src="https://bit.ly/sage-adebayo"
                  alt={eachVehicle.name}
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
            </Center>
          ))}
        </WrapItem>
      </Wrap>
    </div>
  );
};
export default VehicleList;
