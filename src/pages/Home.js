import React from "react";
import Accomodation from "../components/Accomodation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <Banner home={true} />
          <Accomodation />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
