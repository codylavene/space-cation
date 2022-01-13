import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SpotCard from "../../SpotsCard";
import ImageTile from "./ImageCard";
import * as spotActions from "../../../store/spots";
import Heading from "./Heading";
import "./SingleSpot.css";
import Description from "./Description";

const SingleSpot = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currSpot = useSelector((state) => state.spots.currSpot);
  useEffect(() => {
    dispatch(spotActions.getAllSpots());
    dispatch(spotActions.getOneSpot(id));
  }, [dispatch, id]);

  // const spots = Object.values(spotsObj);
  // const spot = spots.find((spot) => spot.id === id);
  return (
    <div>
      <Heading spot={currSpot} />
      <ImageTile images={currSpot?.Images} />
      <Description spot={currSpot} />
    </div>
  );
};

export default SingleSpot;
