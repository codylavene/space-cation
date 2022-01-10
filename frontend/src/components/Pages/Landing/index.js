import React from "react";
import MainImage from "./MainImage";
import "./Landing.css";
import LocationCard from "./LocationCard";
const Landing = (props) => {
  const places = [
    { name: "ISS", distance: "254 miles away" },
    { name: "Orbit", distance: "23,000 miles away" },
    { name: "Mars", distance: "225,000,000 miles away" },
    { name: "Moon", distance: "238,900 miles away" },
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
