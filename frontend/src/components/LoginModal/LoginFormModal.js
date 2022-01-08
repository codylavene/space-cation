import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
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
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
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
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
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
  );
}

export default LoginForm;
