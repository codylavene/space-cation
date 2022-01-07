// import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
// import { useDispatch } from "react-redux";

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [credential, setCredential] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   // const sessionUser = useSelector((state) => state.session.user);

//   // if (sessionUser) {
//   //   return <Redirect to="/" />;
//   // }
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     return dispatch(sessionActions.login({ credential, password })).catch(
//       async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       }
//     );
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <ul className="errors">
//         {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
//       </ul>
//       <label>
//         Username or Email
//         <input
//           type="text"
//           value={credential}
//           onChange={(e) => setCredential(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Password
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </label>
//       <button>Login</button>
//     </form>
//   );
// };

// export default LoginForm;
