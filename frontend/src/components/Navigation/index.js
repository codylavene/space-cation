import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginModal";
import "./Navigation.css";
import { ReactComponent as Logo } from "../../assets/1.svg";
import UserDropdown from "./UserDropdown";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  // const [showModal, setShowModal] = useState(false);
  // const [showDrop, setShowDrop] = useState(false);
  // const dropdownRef = useRef(null);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
    // <UserDropdown setShowDrop={setShowDrop} showDrop={showDrop} />
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal /> */}
        <ProfileButton user={sessionUser} />;
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <div className="nav">
      <nav>
        <div className="logo-third">
          <div className="logo-container">
            <NavLink exact to="/" className="logo">
              <Logo />
            </NavLink>
          </div>
        </div>
        <div className="middle-third">
          <div className="main-links">
            <NavLink to="/places">Places to stay</NavLink>
            {/* {sessionUser && (
            <NavLink to={`/users/${sessionUser?.id}`}>Become a Host</NavLink>
          )} */}
          </div>
        </div>
        <div className="button-third">{isLoaded && sessionLinks}</div>
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
