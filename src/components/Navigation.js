import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink
          exact
          to="/a-propos"
          className="nav-link"
          activeClassName="active"
        >
          À propos
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;
