import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as spotActions from "../../../store/spots";
import SpotCard from "../../SpotsCard";
import SingleSpot from "../SingleSpot";
const SpotsByType = () => {
	const dispatch = useDispatch();
	const { type } = useParams();
	const spotsObj = useSelector((state) => state.spots.entries);
	const sessionUser = useSelector((state) => state.session.user);
	const spots = Object.values(spotsObj);
	useEffect(() => {
		dispatch(spotActions.getSpotsByType(type));
	}, [dispatch, type]);

	let pageView;
	if (spots.length > 0) {
		pageView = (
			<>
				{spots.map((spot) => (
					<SpotCard spot={spot} key={spot.id} />
				))}
			</>
		);
		// } else if (spots.length === 1) {
		//   pageView = (
		//     <>
		//       <SingleSpot spot={spots} />
		//     </>
		//   );
	} else {
		pageView = (
			<>
				<h2 style={{ marginTop: 20, textAlign: "center" }}>
					Sorry, no spots have been added for selected type.
				</h2>
				{sessionUser && (
					<Link to={`/users/${sessionUser.id}`}>
						<button
							className="add-spot-show-modal"
							style={{ marginLeft: "45%", marginTop: 20 }}
						>
							Add a spot
						</button>
					</Link>
				)}
				{!sessionUser && (
					<div style={{ textAlign: "center", marginTop: 20 }}>
						Log in or Sign Up to add a spot!
					</div>
				)}
			</>
		);
	}
	return <div>{pageView}</div>;
};

export default SpotsByType;
