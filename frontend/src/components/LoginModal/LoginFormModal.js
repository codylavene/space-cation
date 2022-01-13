import React, { useContext, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css";
function LoginForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [demo, setDemo] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (demo) {
      return handleDemo(e);
    } else
      return dispatch(sessionActions.login({ credential, password })).catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
  };
  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    // setCredential("demo-user");
    // setPassword("password");
    return dispatch(sessionActions.login({ credential, password }));
  };
  return (
    <div className="login-modal">
      <div className="header">
        <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        <span>Log In</span>
      </div>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="inputs">
          <input
            type="text"
            className="credential"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Username or Email"
            // required
          />
          <input
            className="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            // required
          />
        </div>
        <button type="submit">Log In</button>
        <button
          type="submit"
          onClick={() => {
            setCredential("demo-user");
            setPassword("password");
            return handleSubmit;
          }}
        >
          Demo Login
        </button>
      </form>
      <div className="sign-up-link">
        {/* Don't have an account? <span>Sign Up</span> */}
      </div>
    </div>
  );
}

export default LoginForm;
