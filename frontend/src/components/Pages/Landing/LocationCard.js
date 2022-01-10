import React from "react";

const LocationCard = ({ place }) => {
  return (
    <div className="location-container">
      <div className={`location-image ${place.name}`}></div>
      <div className="location-text" id={place.name}>
        <div className="name">{place.name}</div>
        <div className="distance">{place.distance}</div>
      </div>
    </div>
  );
};

export default LocationCard;
