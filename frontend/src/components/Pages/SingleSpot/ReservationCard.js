import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../../LoginModal";
import SignupModal from "../../SignupModal";
import { reserveSpot } from "../../../store/bookings";
import { useHistory } from "react-router-dom";
import { Collapse } from "react-collapse";
/*--------------------------------------------------------------------*/
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays, addWeeks, compareAsc, isSameDay, startOfDay } from "date-fns";
/*--------------------------------------------------------------------*/
const ReserveCard = ({ spot }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const getDaysArr = (startDate, endDate) => {
		const days = [];
		for (
			let date = new Date(startDate);
			date <= endDate;
			date.setDate(date.getDate() + 1)
		) {
			days.push(new Date(date));
		}
		return days;
	};
	const getBookedDates = (spot) => {
		const disableDates = [];
		spot?.Reservations?.forEach((reservation) => {
			disableDates.push(
				...getDaysArr(
					new Date(reservation.checkIn),
					new Date(reservation.checkOut)
				)
			);
		});
		console.log(disableDates);
		return disableDates.sort((a, b) => compareAsc(a, b));
	};
	getBookedDates(spot);

	const [range, setRange] = useState([
		{
			startDate: startOfDay(new Date()),
			endDate: startOfDay(new Date()),
		},
	]);
	// const [isOpen, setIsOpen] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [startCalc, setStartCalc] = useState(null);
	const [endCalc, setEndCalc] = useState(null);
	const [guestCount, setGuestCount] = useState(1);

	const currUser = useSelector((state) => state.session.user);

	const handleChange = (e) => {
		console.log(e);
		setRange([
			{
				startDate: startOfDay(e.range1.startDate),
				endDate: startOfDay(e.range1.endDate),
			},
		]);
		setStartCalc(new Date(e.range1.startDate).toDateString());
		setEndCalc(new Date(e.range1.endDate).toDateString());
		setDisabled(false);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const daysBetween = getDaysArr(
			startOfDay(new Date(range[0].startDate)),
			startOfDay(new Date(range[0].endDate))
		);
		const booked = getBookedDates(spot);
		console.log(
			getBookedDates(spot).some((date) =>
				isSameDay(range[0].startDate, date)
			)
		);
		console.log(
			daysBetween.some((day1) =>
				booked.filter((day2) => isSameDay(day1, day2))
			)
		);
		if (
			getBookedDates(spot).some((date) =>
				isSameDay(range[0].startDate, date)
			) ||
			getBookedDates(spot).some((date) =>
				isSameDay(range[0].endDate, date)
			)
		) {
			console.log("HELLO");
			return;
		}
		const body = {
			checkIn: range[0].startDate,
			checkOut: range[0].endDate,
			userId: currUser.id,
			hostId: spot.hostId,
			spotId: spot.id,
			price: spot.price,
			guestCount: parseInt(guestCount, 10),
			totalCost:
				spot.price *
				((new Date(endCalc) - new Date(startCalc)) /
					(1000 * 3600 * 24)),
		};
		const data = await dispatch(reserveSpot(spot.id, body));
		console.log(data);
		history.push(`/users/${currUser.id}/reservations`);
	};
	return (
		<div className="reserve-container">
			{currUser ? (
				<div className="reserve-card">
					<h3>
						{`${new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
						}).format(spot?.price)} / `}
						<span>night</span>
					</h3>
					<form onSubmit={onSubmit}>
						<DateRange
							ranges={range}
							editableDateInputs={true}
							moveRangeOnFirstSelection={false}
							minDate={new Date()}
							showDateDisplay={false}
							maxDate={
								new Date(
									new Date().setDate(
										new Date().getFullYear() + 5
									)
								)
							}
							disabledDates={getBookedDates(spot)}
							className="calendar"
							rangeColors={["#453f78"]}
							onChange={(e) => handleChange(e)}
							// showPreview={true}
							// preview={{
							// 	startDate: new Date(range.startDate),
							// 	endDate: new Date(range.endDate),
							// 	color: "#ed474a",
							// }}
							months={1}
							direction="vertical"
							scroll={{ enabled: true, monthWidth: 350 }}
							showMonthAndYearPickers={true}
							initialFocusedRange={[0, 0]}
						/>

						{/* <div>Check-out</div> */}
						{/* <DatePicker
							onChange={handleEnd}
							value={endDate}
							minDate={new Date()}
						/> */}
						<div className="label">Number of guests</div>
						<input
							type="number"
							min={1}
							max={spot?.totalOccupancy}
							required={true}
							value={guestCount}
							onChange={(e) => setGuestCount(e.target.value)}
						></input>
						<button className="reserve-btn" disabled={disabled}>
							Reserve
						</button>
					</form>
					<div className="price-calc">
						{endCalc ? (
							<>
								<div>
									{`${new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "USD",
									}).format(spot?.price)} x ${
										(new Date(endCalc) -
											new Date(startCalc)) /
										(1000 * 3600 * 24)
									} nights`}
								</div>
								<div>
									{`${new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "USD",
									}).format(
										spot?.price *
											((new Date(endCalc) -
												new Date(startCalc)) /
												(1000 * 3600 * 24))
									)}`}
								</div>
							</>
						) : (
							""
						)}
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
