// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import * as sessionActions from "../../store/session";

// const UserDropdown = ({ setShowDrop, showDrop }) => {
//   const dispatch = useDispatch();

//   const logout = (e) => {
//     // e.preventDefault();
//     dispatch(sessionActions.logout());
//     // return <Redirect to="/" />;
//   };

//   useEffect(() => {
//     if (!showDrop) return;
//     const closeMenu = () => {
//       setShowDrop(false);
//     };
//     document.addEventListener("click", closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//   }, [showDrop]);
//   return (
//     <div>
//       <div className="account-drop-btn" onClick={() => setShowDrop(true)}>
//         <i className="fas fa-bars" />
//         <i className="fas fa-user-circle" />
//       </div>
//       {showDrop && (
//         <div className="drop-menu">
//           <div className="account-link">Account</div>
//           <div className="logout-link">
//             <button onClick={logout}>Logout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDropdown;
// /**
//  *    <span>
//           Welcome,
//           <br />
//           {user.username}
//         </span>
//         <Link exact="true" to={`/users/${user.id}`}>
//           Account
//         </Link>
//         <Link to="/" className="account-btn" onClick={logout}>
//           Logout
//         </Link>
//       </>
//  */
