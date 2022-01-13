import React from "react";
import { Link } from "react-router-dom";
const LocationCard = ({ place }) => {
  return (
    <div className="location-container">
      <Link to={`/categories/${place.type}`}>
        <div className={`location-image ${place.id}`}></div>
        <div className="location-text" id={place.id}>
          <div className="place-name">{place.name}</div>
          <div className="distance">{place.distance}</div>
        </div>
      </Link>
    </div>
  );
};

export default LocationCard;
