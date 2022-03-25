import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import { getUserBookings } from "../../store/bookings";
import ReserveCard from "../Pages/SingleSpot/ReservationCard";
import "./Reservations.css";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { formatDistanceToNow, isPast, isToday, compareAsc } from "date-fns";
import EditReserveCard from "../Pages/SingleSpot/EditReserveCard";
import defaultImg from "../../assets/default.jpg";
import EditReserveModal from "../Pages/SingleSpot/EditReserveModal";
import CancelReserveModal from "../Pages/SingleSpot/CancelReserveModal";
const Reservations = (props) => {
	const dispatch = useDispatch();
	const currUser = useSelector((state) => state.session.user);
	const bookingsObj = useSelector((state) => state.bookings.bookings);
	const bookings = Object.values(bookingsObj);
	const [showEdit, setShowEdit] = useState(false);
	const [showCancel, setShowCancel] = useState(false);

	useEffect(() => {
		dispatch(getUserBookings(currUser?.id));
	}, []);
	console.log(bookings);
	return (
		<div className="reservations-wrapper">
			<h2>{bookings?.length ? "Upcoming Trips" : "No upcoming trips"}</h2>
			{bookings?.length > 0 &&
				bookings
					// .sort((a, b) =>
					// 	compareAsc(new Date(a.checkIn), new Date(b.checkIn))
					// )
					.map((booking) =>
						!isPast(new Date(booking.checkIn)) ||
						isToday(new Date(booking.checkIn)) ? (
							<div
								key={booking.id}
								className="reservation-container"
							>
								<div className="img-container">
									<img
										src={
											booking?.Spot?.Images[0]?.url
												? booking?.Spot?.Images[0]?.url
												: defaultImg
										}
										alt={"depiction of spot"}
									></img>
								</div>
								<div className="details-container">
									<div className="heading">
										<h3>
											You're going to{" "}
											{booking?.Spot?.name}
											{isToday(new Date(booking?.checkIn))
												? " today! "
												: ` in ${formatDistanceToNow(
														new Date(
															booking?.checkIn
														)
												  )}`}
										</h3>
										<div className="reservation-actions">
											<EditReserveModal
												spot={booking.Spot}
												dates={[
													booking.checkIn,
													booking.checkOut,
												]}
												booking={booking}
											/>
											<CancelReserveModal
												booking={booking}
											/>
										</div>
									</div>
									<div className="booking-dates">
										<div>Check In</div>
										<div>
											{new Date(
												booking?.checkIn
											).toLocaleDateString("en-US", {
												weekday: "long",
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</div>
									</div>
									<div className="booking-dates">
										<div>Check Out</div>
										<div>
											{new Date(
												booking?.checkOut
											).toLocaleDateString("en-US", {
												weekday: "long",
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</div>
									</div>
									<div className="booking-dates">
										<div>Number of guests</div>
										<div>{booking?.guestCount}</div>
									</div>
									<div className="booking-dates">
										<div>Total Price</div>
										<div>
											{new Intl.NumberFormat("en-US", {
												style: "currency",
												currency: "USD",
											}).format(booking?.totalCost)}
										</div>
									</div>
								</div>
							</div>
						) : (
							""
						)
					)}
		</div>
	);
};

export default Reservations;
