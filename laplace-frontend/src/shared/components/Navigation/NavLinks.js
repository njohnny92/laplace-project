import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li onClick={props.onClick}>
        <NavLink to="/" exact>
          Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li onClick={props.onClick}>
          <NavLink to={`/${auth.userId}/places`}>My Places</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li onClick={props.onClick}>
          <NavLink to="/places/new">Add Place</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li onClick={props.onClick}>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
