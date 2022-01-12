import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./SpotCard.css";
import SpotImage from "./SpotImage";
import SpotDetails from "./SpotDetails";
const SpotCard = ({ spot }) => {
  return (
    <div className="spot-card">
      <Link to={`/places/${spot?.id}`}>
        <SpotImage image={spot?.Images[0]?.url} />
        <div className="info">
          <SpotDetails spot={spot} />
        </div>
      </Link>
    </div>
  );
};

export default SpotCard;
