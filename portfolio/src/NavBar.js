import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/" activeStyle={{ color: "red" }}>
          About
        </NavLink>{" "}
        |
        <NavLink exact to="/projects" activeStyle={{ color: "red" }}>
          Projects
        </NavLink>{" "}
        |
        <NavLink exact to="/contact" activeStyle={{ color: "red" }}>
          Contact
        </NavLink>{" "}
      </nav>
    </div>
  );
};

export default NavBar;
