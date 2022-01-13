import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SignupForm.css";

const SignupModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  if (sessionUser) return <Redirect to="/" />;
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ name, username, email, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      ...errors,
      "Confirm Password and Password fields must match",
    ]);
  };
  // useEffect(() => {
  //   const errs = [];
  //   if (password !== confirmPassword) {
  //     errs.push("Passwords must match.");
  //     setErrors([...errors, errs]);
  //   }
  // }, [password, confirmPassword, errors]);
  return (
    <div className="signup-modal">
      <div className="header">
        <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        <span>Sign Up</span>
      </div>
      <form onSubmit={onSubmit}>
        <ul className="errors">
          {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
        </ul>
        <div className="signup-inputs">
          <input
            className="top-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            // required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            // required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            // required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            // required
          />
          <input
            className="bottom-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            // required
          />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupModal;
