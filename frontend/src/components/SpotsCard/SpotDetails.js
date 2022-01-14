import React, { useEffect, useState } from "react";

const SpotDetails = ({ spot }) => {
  const [rating, setRating] = useState(0);
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
    Reviews,
    User,
  } = spot;
  useEffect(() => {
    const getAvgRating = (reviews) => {
      const ratings = reviews.map((review) => review.rating);
      if (ratings.length > 0) {
        const avg = ratings.reduce((total, rating) => total + rating);
        return avg;
      } else return 0;
    };
    if (Reviews.length) {
      setRating(getAvgRating(Reviews));
    }
  }, [spot, Reviews, rating]);

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
        style={{ borderBottom: "1px solid rgb(190,190,190)", width: "28px" }}
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
        <span>
          {" "}
          {rating.toFixed(2)} ({`${Reviews.length} review(s)`})
        </span>
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
