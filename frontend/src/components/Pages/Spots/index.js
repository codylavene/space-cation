import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as spotActions from "../../../store/spots";
import SpotCard from "../../SpotsCard";
const Spots = ({ isLoaded }) => {
  // const spots = useSelector((state) => state.spots);
  const dispatch = useDispatch();
  const getSpots = async () => {
    const spots = await dispatch(spotActions.getAllSpots());
    return await spots;
  };
  const spots = getSpots();
  console.log("spots in spots page", spots);
  return (
    <div>
      {spots.length > 0 && spots.Map((spot) => <SpotCard spot={spot} />)}
    </div>
  );
};

export default Spots;
