import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./BecomeHost.css";

const BecomeHostForm = (props) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);
	const updateUser = (e) => {
		e.preventDefault();
		dispatch(sessionActions.updateHostStatus(user));
	};
	return (
		<div className="host-activate-container">
			<div className="host-activate">
				<div>Click here to register as a host!</div>
				<button onClick={updateUser}>Become a Host</button>
			</div>
		</div>
	);
};

export default BecomeHostForm;
