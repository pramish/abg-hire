import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVehicleByID } from "../../graphql/vehicle/vehicle";
import GraphQlClient from "../../graphql/api";
import { Link } from "react-router-dom";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { Button } from "@chakra-ui/react";

const VehicleDetail = () => {
  const [vehicle, setVehicle] = useState();
  const [vehicleData, setVehicleData] = useState();
  const [isResult, setResult] = useState(false);
  const { vehicleID } = useParams();
  useEffect(() => {
    GraphQlClient.request(getVehicleByID, { vehicleID }).then((data) => {
      setVehicle(data.getVehicleByID);
      setResult(true);
    });
  }, [vehicleID]);
  const bookVehicle = () => {
    console.log(vehicleData);
  };
  return (
    <div>
      <h1>I am a Vehicle Detail Page and the ID is {vehicleID}</h1>
      {isResult ? (
        <div>
          <h1>Yaha Image aauxa hai. Which is on right</h1>
          <div>
            <h1>Vehicle Name: {vehicle.name}</h1>
            <h1>Vehicle Description: {vehicle.description}</h1>
            <h1>Vehicle Price: ${vehicle.price}</h1>
            <RangeDatePicker
              startDate={new Date(2020, 0, 15)}
              endDate={new Date(2020, 1, 1)}
              onChange={(startDate, endDate) =>
                setVehicleData(startDate, endDate)
              }
              startDatePlaceholder="Start Date"
              endDatePlaceholder="End Date"
              // highlightToday
              startWeekDay="mondays"
            />
            <Button onClick={bookVehicle}>Book {vehicle.name}</Button>
            <Link to="/">
              <Button>Back to Vehicle List</Button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default VehicleDetail;
