import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "inactive nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "inactive nav-link"
          }
        >
          À propos
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;
