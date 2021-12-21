import React from "react";
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
