import React from "react";
import { NavLink } from "react-router-dom";
import "./Stle.css";

const NavBar = () => {
  return (
    <div className="mainMenu">
      <NavLink exact activeClassName="menu_link " to="/">
        Home
      </NavLink>

      <NavLink exact activeClassName="menu_link " to="/About">
        About us
      </NavLink>
      <NavLink exact activeClassName="menu_link " to="/Contact">
        Contact Us
      </NavLink>
    </div>
  );
};

export default NavBar;
