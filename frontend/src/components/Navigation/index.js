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
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

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
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/places">Places to stay</NavLink>
      <NavLink to="/experiences">Experiences</NavLink>
      <NavLink to="/host-signup">Become a Host</NavLink>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
