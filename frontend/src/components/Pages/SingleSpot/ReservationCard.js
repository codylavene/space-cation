import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useSelector } from "react-redux";
import LoginModal from "../../LoginModal";
import SignupModal from "../../SignupModal";
const ReserveCard = ({ spot }) => {
	const date = new Date();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(
		new Date(date.setDate(date.getDate() + 7))
	);
	const currUser = useSelector((state) => state.session.user);
	console.log(startDate);
	console.log(endDate);
	const handleStart = (date) => {
		setStartDate(new Date(date));
	};
	const handleEnd = (date) => {
		setEndDate(new Date(date));
	};
	return (
		<div className="reserve-container">
			{currUser ? (
				<div className="reserve-card">
					<h3>{`${new Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "USD",
					}).format(spot?.price)} / night`}</h3>
					<form>
						<div>Check-in</div>
						<DatePicker onChange={handleStart} value={startDate} />

						<div>Check-out</div>
						<DatePicker onChange={handleEnd} value={endDate} />
						<div>Number of guests</div>
						<input
							type="number"
							min={1}
							max={spot?.totalOccupancy}
						></input>
						<button className="reserve-btn">Reserve</button>
					</form>
					<div>
						<span>{`${new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
						}).format(spot?.price)} x ${
							endDate.getDate() - startDate.getDate()
						} nights`}</span>
						<span>{`${new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
						}).format(
							spot?.price * endDate.getDate() -
								startDate.getDate()
						)}`}</span>
					</div>
				</div>
			) : (
				<div className="user-actions">
					<LoginModal />
					or
					<SignupModal />
					to reserve!
				</div>
			)}
		</div>
	);
};

export default ReserveCard;
