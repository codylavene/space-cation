import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as spotActions from "../../../store/spots";
import SpotCard from "../../SpotsCard";
const HostSpots = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const spotsObj = useSelector((state) => state.spots.entries);
  const spots = Object.values(spotsObj);
  useEffect(() => {
    const checkIfHost = () => {
      if (sessionUser.isHost) {
        dispatch(spotActions.getHostsSpots(sessionUser));
      } else return;
    };
    checkIfHost();
    // dispatch(spotActions.getAllSpots());
  }, [dispatch, sessionUser]);
  return (
    <div className="spots-container">
      {spots.length > 0 &&
        spots.map((spot) => (
          <>
            <SpotCard spot={spot} key={spot.id} />
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </>
        ))}
    </div>
  );
};

export default HostSpots;
