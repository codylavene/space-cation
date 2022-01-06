import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginFormPage = () => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-form">
      <form onSubmit={onSubmit}>
        <ul className="errors">
          {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginFormPage;
