import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <h1>Not Found!</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
