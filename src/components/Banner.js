import React from "react";
import BannerImgHome from "../assets/bannerImg_Home.jpg";
import BannerImgAbout from "../assets/bannerImg_About.jpg";

class Banner extends React.Component {
  render() {
    // Displaying different background image depending on page
    let setBackgroundImg = () => {
      let backgroundImg = this.props.home ? BannerImgHome : BannerImgAbout;

      return {
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.327),rgba(0, 0, 0, 0.3)), url(" +
          backgroundImg +
          ")",
      };
    };

    // Props display home banner message on homepage only
    return (
      <div className="banner" style={setBackgroundImg()}>
        {this.props.home && (
          <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        )}
      </div>
    );
  }
}

export default Banner;
