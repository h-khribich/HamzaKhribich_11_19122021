import React from "react";
import navArrow from "../assets/arrow.svg";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState({
      open: !this.state.open,
    });

    let arrow = document.querySelector(`#${e.target.id} > .collapsable__arrow`);
    arrow.classList.toggle("opened-arrow");
  }

  render() {
    return (
      <div
        className="collapsable aboutPage-collapsable"
        onClick={(e) => this.handleToggle(e)}
      >
        <div id={this.props.id} className="collapsable__title-wrapper">
          <h3 className="collapsable__title">{this.props.title}</h3>
          <img src={navArrow} alt="" className="collapsable__arrow" />
        </div>
        {this.state.open && (
          <p className="collapsable__description">{this.props.description}</p>
        )}
      </div>
    );
  }
}

export default Collapsable;
