import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SpotCard from "../../SpotsCard";
import * as spotActions from "../../../store/spots";

const SingleSpot = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id);
  const spot = useSelector((state) => state.spots.currSpot);
  console.log(spot);
  // const spots = Object.values(spotsObj);
  // const spot = spots.find((spot) => spot.id === id);
  useEffect(() => {
    dispatch(spotActions.getAllSpots());
    dispatch(spotActions.getOneSpot(id));
  }, [dispatch, id]);
  return (
    <div>
      <h1 style={{ marginTop: 400 }}>{spot.name}</h1>
      {/* <SpotCard spot={spot} /> */}
    </div>
  );
};

export default SingleSpot;
