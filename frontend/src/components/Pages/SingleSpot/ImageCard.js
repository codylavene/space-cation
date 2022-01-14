import React from "react";
import defaultImg from "../../../assets/default.jpg";
const ImageTile = ({ images }) => {
  return (
    <div className="all-spot-images">
      {images?.length > 0 &&
        images.map((image) => (
          <div className="spot-image-container" key={image.id}>
            <img alt={image.url} src={image?.url}></img>
          </div>
        ))}
      {!images?.length && (
        <div className="spot-image-container">
          <img alt={"default galaxy"} src={defaultImg}></img>
        </div>
      )}
    </div>
  );
};

export default ImageTile;
