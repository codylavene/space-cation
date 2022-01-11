import React from "react";
import { Link } from "react-router-dom";
const LocationCard = ({ place }) => {
  return (
    <div className="location-container">
      <Link to={`/places/${place.name.toLowerCase()}`}>
        <div className={`location-image ${place.name}`}></div>
        <div className="location-text" id={place.name}>
          <div className="name">{place.name}</div>
          <div className="distance">{place.distance}</div>
        </div>
      </Link>
    </div>
  );
};

export default LocationCard;
