import React from "react";

const Description = ({ spot }) => {
	return (
		<div className="details-container">
			<div className="details">
				<h3>{`${spot?.type} hosted by ${spot?.User?.name}`}</h3>
				<br />
				<h3>Details:</h3>
				<br />
				<div>
					<div>{`Sleeps ${spot?.totalOccupancy}`}</div>
					<div>{`${spot?.totalBedrooms} Bedroom(s)`}</div>
					<div>{`${spot?.totalBathrooms} Bathroom(s)`}</div>
				</div>
				<br />
				<h3>Features:</h3>
				<div className="amenities">
					{spot?.hasWifi ? (
						<i className="fa-solid fa-wifi" title="Wifi"></i>
					) : (
						""
					)}

					{spot?.hasTV ? (
						<i className="fa-solid fa-tv" title="TV"></i>
					) : (
						""
					)}

					{spot?.hasAC ? (
						<i
							className="fa-solid fa-snowflake"
							title="Air Conditioning"
						></i>
					) : (
						""
					)}

					{spot?.hasHeat ? (
						<i className="fa-solid fa-fire" title="Heat"></i>
					) : (
						""
					)}

					{spot?.pets ? (
						<i className="fa-solid fa-paw" title="Pets Allowed"></i>
					) : (
						""
					)}
				</div>
				<br />
				<div className="description">{spot?.description}</div>
			</div>
		</div>
	);
};

export default Description;
