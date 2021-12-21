import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <Banner about={true} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
