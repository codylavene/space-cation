import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/places">Places to stay</NavLink>
      <NavLink to="/experiences">Experiences</NavLink>
      <NavLink to="/host-signup">Become a Host</NavLink>
      <ProfileButton user={sessionUser} />
    </nav>
  );
};

export default Navigation;
