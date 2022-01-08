import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginModal from "../LoginModal";
import { useModal } from "../../context/Modal";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { value, setValue } = useModal();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    // console.log({ value });
    // document.addEventListener("click", closeMenu);

    // return () => document.removeEventListener("click", closeMenu);
  }, [showMenu, value]);

  const logout = (e) => {
    // e.preventDefault();
    dispatch(sessionActions.logout());
    // return <Redirect to="/" />;
  };
  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <span>
          Welcome,
          <br />
          {user.username}
        </span>
        <Link exact="true" to={`/users/${user.id}/messages`}>
          Messages
        </Link>
        <Link exact="true" to={`/users/${user.id}/trips`}>
          Trips
        </Link>
        <Link exact="true" to={`/users/${user.id}`}>
          Account
        </Link>
        <Link to="/" className="account-btn" onClick={logout}>
          Logout
        </Link>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginModal />
        <Link to="/signup">Sign Up</Link>
        <Link to="/become-a-host">Host Your Home</Link>
      </>
    );
  }
  return (
    <>
      {/* <button onClick={openMenu}>
        <i className="fas fa-bars" style={{ fontSize: 14 }}></i>
        <i className="fas fa-user-circle"></i>
      </button> */}
      {sessionLinks}
    </>
  );
};

export default ProfileButton;
