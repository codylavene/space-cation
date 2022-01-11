import React from "react";
import ImageTile from "./ImageCard";

const Heading = ({ spot }) => {
  return (
    <div>
      <h1 className="title">{spot?.title}</h1>
      <div>
        <span className="rating">{spot?.Reviews?.rating}</span>
        <span className="coordinates">{spot?.coordinates}</span>
      </div>
    </div>
  );
};

export default Heading;
