import React from "react";

const Description = ({ spot }) => {
  return (
    <div className="details-container">
      <div className="description">{spot?.description}</div>
      <div className="details">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Description;
