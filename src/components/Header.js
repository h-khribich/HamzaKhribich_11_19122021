import React from "react";
import Navigation from "./Navigation";
import { ReactComponent as KasaLogo } from "../assets/kasa_logo.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <KasaLogo fill="#FF6060" className="logo" />
        <Navigation />
      </div>
    );
  }
}

export default Header;
