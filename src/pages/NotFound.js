import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <div className="errorMsg__wrapper">
            <h1 className="errorMsg__code">404</h1>
            <p className="errorMsg__description">
              Oops! La page que vous demandez n'existe pas.
            </p>
            <Link className="errorMsg__homelink" to="/">
              Retourner à la page d'accueil
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
