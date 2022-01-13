import React from "react";
import MainImage from "./MainImage";
import "./Landing.css";
import LocationCard from "./LocationCard";
const Landing = (props) => {
  const places = [
    {
      name: "Space Stations",
      id: "ISS",
      distance: "ISS is 254 miles away",
      type: "Space Station",
    },
    {
      name: "Orbit",
      id: "Orbit",
      distance: "23,000 miles away",
      type: "Satellite",
    },
    {
      name: "Mars",
      id: "Mars",
      distance: "225,000,000 miles away",
      type: "Mars",
    },
    { name: "Moon", id: "Moon", distance: "238,900 miles away", type: "Moon" },
  ];
  return (
    <div>
      <MainImage />
      <div className="locations">
        {places.map((place) => (
          <LocationCard place={place} key={place.name} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
