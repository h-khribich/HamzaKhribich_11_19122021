import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <h1>Home!</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
