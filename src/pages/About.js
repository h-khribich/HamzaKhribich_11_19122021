import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <h1>À propos</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
