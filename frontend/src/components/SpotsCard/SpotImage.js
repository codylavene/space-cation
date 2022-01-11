import React from "react";

const SpotImage = ({ image }) => {
  console.log("++++++++++++++++++++++++=", image);
  return <img src={image} alt={image}></img>;
};

export default SpotImage;
