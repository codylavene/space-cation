import React from "react";

const SpotDetails = ({ spot }) => {
  const {
    name,
    title,
    hasAC,
    hasWifi,
    hasTV,
    pets,
    price,
    totalBedrooms,
    totalBathrooms,
    totalOccupancy,
    type,
  } = spot;
  const findAmenities = (hasAC, hasWifi, hasTV, pets) => {
    const amenities = [];
    amenities.push(hasAC ? "AC" : "");
    amenities.push(hasTV ? "TV" : "");
    amenities.push(hasWifi ? "Wifi" : "");
    amenities.push(pets ? "Pets Allowed" : "No Pets");
    return amenities;
  };
  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const amenities = findAmenities(hasAC, hasWifi, hasTV, pets);
  return (
    <>
      <div className="type">{type}</div>
      <div className="title">{title}</div>
      <div className="name">{name}</div>{" "}
      {/*change address to name in database*/}
      <span
        className="line"
        style={{ borderBottom: "1px solid rgb(190,190,190", width: "28px" }}
      ></span>
      <div className="details">
        {`${totalOccupancy} guests - ${totalBedrooms} bedrooms - ${totalBathrooms} bath`}
      </div>
      <div className="details">
        {amenities.length > 0 &&
          amenities.map((each, idx) => <span key={idx}> {each} </span>)}
      </div>
      <div className="rating">
        <i className="fas fa-star"></i>
        <span> 5.0 (1 review)</span>
      </div>
      <div className="price">
        <span style={{ fontWeight: 800 }}>
          {" "}
          {`${priceFormat.format(price)} `}{" "}
        </span>
        {" / night"}
      </div>
    </>
  );
};

export default SpotDetails;
