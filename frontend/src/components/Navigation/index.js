// import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import ProfileButton from "./ProfileButton";
// import "./Navigation.css";
// const Navigation = ({ isLoaded }) => {
//   const sessionUser = useSelector((state) => state.session.user);

//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/places">Places to stay</NavLink>
//       <NavLink to="/experiences">Experiences</NavLink>
//       <NavLink to="/host-signup">Become a Host</NavLink>
//       <ProfileButton user={sessionUser} />
//     </nav>
//   );
// };

// export default Navigation;
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginModal";
import "./Navigation.css";
import { ReactComponent as Logo } from "../../assets/1.svg";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal /> */}
        <ProfileButton user={sessionUser} />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <div className="nav">
      <nav>
        <div className="logo-container">
          <NavLink exact to="/" className="logo">
            <Logo />
          </NavLink>
        </div>
        <div className="main-links">
          <NavLink to="/places">Places to stay</NavLink>
          {/* <NavLink to="/experiences">Experiences</NavLink> */}
          {sessionUser && (
            <NavLink to={`/users/${sessionUser?.id}`}>Become a Host</NavLink>
          )}
          {!sessionUser && (
            <NavLink
              to="/"
              // onClick={(e) => {
              //   setShowModal(true);
              //   e.preventDefault();
              //   return <LoginFormModal setShowModal={setShowModal} />;
              // }}
            >
              Become a Host
            </NavLink>
          )}
        </div>
        {isLoaded && sessionLinks}
      </nav>
      {/* <div className="search">
        <input type="search" placeholder="Where are you going?"></input>
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div> */}
    </div>
  );
}

export default Navigation;
