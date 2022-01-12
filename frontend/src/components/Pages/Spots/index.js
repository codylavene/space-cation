import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as spotActions from "../../../store/spots";
import SpotCard from "../../SpotsCard";
const Spots = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const spotsObj = useSelector((state) => state.spots.entries);
  const spots = Object.values(spotsObj);

  useEffect(() => {
    dispatch(spotActions.getAllSpots());
  }, [dispatch]);
  return (
    <div className="spots-container">
      {spots.length > 0 &&
        spots.map((spot) => <SpotCard spot={spot} key={spot.id} />)}
    </div>
  );
};

export default Spots;
