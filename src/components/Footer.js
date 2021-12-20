import React from "react";
import { ReactComponent as KasaLogo } from "../assets/kasa_logo.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__box">
          <KasaLogo fill="white" className="footer__logo" />
          <p>
            <i className="far fa-copyright"></i> 2020 Kasa. All rights reserved
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
