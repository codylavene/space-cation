import React from "react";
import defaultImg from "../../assets/default.jpg";
const SpotImage = ({ image }) => {
  return <img src={image ? image : defaultImg} alt={image}></img>;
};

export default SpotImage;
