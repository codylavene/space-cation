import React from "react";

const ImageTile = ({ images }) => {
  // console.log({ spot });
  return (
    <div style={{ width: "90%" }}>
      {images?.length &&
        images.map((image) => (
          <div
            key={image.id}
            style={{ backgroundImage: `url(${image?.url})` }}
          ></div>
        ))}
    </div>
  );
};

export default ImageTile;
