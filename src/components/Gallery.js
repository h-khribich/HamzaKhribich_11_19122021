import React from "react";
import navArrow from "../assets/arrow.svg";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgNb: 0,
      // All files possess at least one image
      counter: 1,
      currentImgPos: 0,
      backgroundImg: 0,
    };

    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleCounter = this.handleCounter.bind(this);
  }

  componentDidMount() {
    // Initial state regardless of picture array length
    this.setState({
      imgNb: this.props.pictures.length,
      backgroundImg: this.props.pictures[this.state.currentImgPos],
    });
  }

  handleNavigation(e) {
    let pictures = this.props.pictures;

    // Incrementing and decrementing depending on current img position
    if (e.target.className === "right-arrow") {
      // At the end of slideshow, reset all
      if (this.state.counter === this.state.imgNb) {
        this.setState({
          counter: 1,
          currentImgPos: 0,
          backgroundImg: pictures[0],
        });
      } else {
        this.setState((state) => ({
          currentImgPos: state.currentImgPos + 1,
          backgroundImg: pictures[state.currentImgPos + 1],
          counter: state.counter + 1,
        }));
      }
    } else if (e.target.className === "left-arrow") {
      // Go to end of slideshow if trying to go backwards from starting position
      if (this.state.currentImgPos === 0) {
        this.setState({
          counter: this.state.imgNb,
          currentImgPos: this.state.imgNb - 1,
          backgroundImg: pictures[pictures.length - 1],
        });
      } else {
        this.setState((state) => ({
          currentImgPos: state.currentImgPos - 1,
          backgroundImg: pictures[state.currentImgPos - 1],
          counter: state.counter - 1,
        }));
      }
    }
  }

  handleCounter() {
    console.log("test");
  }

  render() {
    // Ternary for navigation elements to only appear if img count is greater than 1
    // Linear gradient enhances navigation elements' visibility
    return (
      <div className="gallery">
        {this.state.imgNb > 1 ? (
          <div
            className="wrapper"
            style={{
              backgroundImage: "url(" + this.state.backgroundImg + ")",
            }}
          >
            <img
              className="left-arrow"
              src={navArrow}
              alt=""
              onClick={(e) => this.handleNavigation(e)}
            />
            <p className="counter">
              {this.state.counter}/{this.state.imgNb}
            </p>
            <img
              className="right-arrow"
              src={navArrow}
              alt=""
              onClick={(e) => this.handleNavigation(e)}
            />
          </div>
        ) : (
          <div
            className="wrapper"
            style={{
              backgroundImage: "url(" + this.state.backgroundImg + ")",
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default Gallery;
