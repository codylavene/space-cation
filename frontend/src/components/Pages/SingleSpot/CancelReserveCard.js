import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelBooking, getUserBookings } from "../../../store/bookings";

const CancelReserveCard = ({ booking, setShowModal }) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);
	const cancelReservation = async () => {
		// e.preventDefault();
		await dispatch(cancelBooking(booking.Spot.id, booking.id));
		dispatch(getUserBookings(user.id));
		setTimeout(() => {
			setShowModal(false);
		}, 200);
	};
	return (
		<div className="host-activate-container">
			<div className="host-activate">
				<div>Are you sure you want to cancel this reservation?</div>
				<button id="delete-spot" onClick={cancelReservation}>
					Cancel Reservation
				</button>
				<button onClick={() => setShowModal(false)}>Exit</button>
			</div>
		</div>
	);
};

export default CancelReserveCard;
