import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SpotCard.css";
import SpotImage from "./SpotImage";
import SpotDetails from "./SpotDetails";
const SpotCard = ({ spot }) => {
  // const spot = useSelector((state) => state.spots);
  return (
    <div className="spot-card">
      <Link to={`/places/${spot.id}`}>
        <SpotImage image={spot.Images[0].url} />
        <div className="info">
          <SpotDetails spot={spot} />
        </div>
      </Link>
    </div>
  );
};

export default SpotCard;
