import { useSelector } from "react-redux";
import { csrfFetch } from "./csrf";
/*--------------------------------------------------------------------*/
// ACTIONS
const ADD_BOOKING = "bookings/addBooking";
const LOAD_BOOKINGS = "bookings/loadBookings";
const EDIT_BOOKING = "bookings/editBooking";
const DELETE_BOOKING = "bookings/removeBooking";
/*--------------------------------------------------------------------*/
// ACTION CREATORS
const loadBookings = (bookings) => ({
	type: LOAD_BOOKINGS,
	bookings,
});
const addBooking = (booking) => ({
	type: ADD_BOOKING,
	booking,
});

const editBooking = (booking) => ({
	type: EDIT_BOOKING,
	booking,
});

const deleteBooking = (booking) => ({
	type: DELETE_BOOKING,
	booking,
});
/*--------------------------------------------------------------------*/
// FETCH UTIL FUNCTIONS
export const reserveSpot = (id, reservation) => async (dispatch) => {
	console.log(reservation);
	const {
		checkIn,
		checkOut,
		hostId,
		userId,
		spotId,
		price,
		totalCost,
		guestCount,
	} = reservation;
	const res = await csrfFetch(`/api/spots/${id}/bookings`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			checkIn,
			checkOut,
			userId,
			hostId,
			spotId,
			price,
			totalCost,
			guestCount,
		}),
	});
	const data = await res.json();
	dispatch(addBooking(data.reservation));
	return data.reservation;
};
export const editReservation = (id, spotId, body) => async (dispatch) => {
	const {
		checkIn,
		checkOut,
		hostId,
		userId,
		spotId,
		price,
		totalCost,
		guestCount,
	} = body;
	const res = await csrfFetch(`/api/spots/${spotId}/bookings/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			checkIn,
			checkOut,
			hostId,
			userId,
			spotId,
			price,
			totalCost,
			guestCount,
		}),
	});
	const data = await res.json();
	dispatch(editBooking(data.reservation));
	return data.reservation;
};
export const cancelBooking = (spotId, id) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${spotId}/bookings/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	if (data.message == "Destroyed") {
		dispatch(deleteBooking(data));
	}
};
export const getUserBookings = (id) => async (dispatch) => {
	const res = await csrfFetch(`/api/users/${id}/bookings`);
	const data = await res.json();
	dispatch(loadBookings(data));
	return data;
};
/*--------------------------------------------------------------------*/
// SPOTS REDUCER
const initialState = { bookings: {} };

const bookingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_BOOKINGS: {
			const newState = { ...state, bookings: { ...state.bookings } };
			newState.bookings = action.bookings.reduce((bookings, booking) => {
				bookings[booking.id] = booking;
				return bookings;
			}, {});
			return newState;
		}
		case EDIT_BOOKING: {
			const newState = {
				...state,
				bookings: { ...state.bookings },
			};
			newState.bookings[action.booking.id] = action.booking;
			return newState;
		}
		case ADD_BOOKING: {
			const newState = {
				...state,
				bookings: { ...state.bookings },
			};
			console.log(action);
			newState.bookings[action.booking.id] = action.booking;
			return newState;
		}
		case DELETE_BOOKING: {
			const newState = {
				...state,
				bookings: { ...state.bookings },
			};
			delete newState.bookings[action.booking];
			return newState;
		}
		default:
			return state;
	}
};
/*--------------------------------------------------------------------*/
export default bookingsReducer;
