import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SpotCard.css";
const SpotCard = () => {
  const spot = useSelector((state) => state.spot);
  return (
    <>
      <div className="spot-card">
        <Link to={`/places`}>
          <img src="https://static.toiimg.com/photo/81386864.cms" alt=""></img>
          <div className="info">
            <div className="type">Satellite</div>
            <div className="name">Intersat-18</div>
            <span className="line">-------</span>
            <div className="details">2 guest - 1 bedroom - 1 bath</div>
            <div className="details">Wifi - TV - AC - Heat</div>
            <div className="rating">
              <i className="fas fa-star"></i>
              <span> 5.0 (1 review)</span>
            </div>
            <div className="price">$12,000 / night</div>
          </div>
        </Link>
      </div>
      <div className="spot-card">
        <Link to={`/places`}>
          <img src="https://static.toiimg.com/photo/81386864.cms" alt=""></img>
          <div className="info">
            <div className="type">Satellite</div>
            <div className="name">Intersat-18</div>
            <span className="line">-------</span>
            <div className="details">2 guest - 1 bedroom - 1 bath</div>
            <div className="details">Wifi - TV - AC - Heat</div>
            <div className="rating">
              <i className="fas fa-star"></i>
              <span> 5.0 (1 review)</span>
            </div>
            <div className="price">$12,000 / night</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SpotCard;
