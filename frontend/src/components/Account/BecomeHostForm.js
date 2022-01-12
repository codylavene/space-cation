import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
const BecomeHostForm = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const updateUser = (e) => {
    console.log(user);
    e.preventDefault();
    dispatch(sessionActions.updateHostStatus(user));
  };
  return (
    <div>
      <div>
        <h3>Click here to register as a host!</h3>
        <button onClick={updateUser}>Become a Host</button>
      </div>
    </div>
  );
};

export default BecomeHostForm;
