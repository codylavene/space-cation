import React from "react";

const ImageTile = ({ images }) => {
  return (
    <div className="all-spot-images">
      {images?.length &&
        images.map((image) => (
          <div className="spot-image-container" key={image.id}>
            <img alt={image.url} src={image?.url}></img>
          </div>
        ))}
    </div>
  );
};

export default ImageTile;
