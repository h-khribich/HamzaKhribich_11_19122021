import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          À propos
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;
