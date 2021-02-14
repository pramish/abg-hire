import React from "react";
import { useParams } from "react-router-dom";

const VehicleDetail = () => {
  const { vehicleID } = useParams();
  return (
    <div>
      <h1>I am a Vehicle Detail Page and the ID is {vehicleID}</h1>
    </div>
  );
};
export default VehicleDetail;
