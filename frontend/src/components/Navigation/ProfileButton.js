import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginModal from "../LoginModal";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <Link to={`users/${user.id}/messages`}>Messages</Link>
        <Link to={`users/${user.id}/trips`}>Trips</Link>
        <Link to={`users/${user.id}`}>Account</Link>
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
      <button onClick={openMenu}>
        <i className="fas fa-user-circle"></i>
      </button>
      <div className="menu-modal">{showMenu && sessionLinks}</div>
    </>
  );
};

export default ProfileButton;
