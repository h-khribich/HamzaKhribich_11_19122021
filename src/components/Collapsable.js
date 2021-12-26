import React from "react";
import navArrow from "../assets/arrow.svg";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handlePropTypes = this.handlePropTypes.bind(this);
  }

  // After toggling state of element, arrow is animated on opening
  handleToggle(e) {
    this.setState({
      open: !this.state.open,
    });

    let arrow = document.querySelector(`#${e.target.id} > .collapsable__arrow`);
    arrow.classList.toggle("opened-arrow");
  }

  // If prop is an array, element should be an HTML list, else, paragraph
  handlePropTypes() {
    if (this.props.description) {
      return (
        <p className="collapsable__description">{this.props.description}</p>
      );
    } else if (this.props.equipments) {
      return (
        // Elements share the same class as they are identical in style
        <ul className="collapsable__description">
          {this.props.equipments.map((prop) => (
            <li key={prop}>{prop}</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="collapsable" onClick={(e) => this.handleToggle(e)}>
        <div id={this.props.id} className="collapsable__title-wrapper">
          <h3 className="collapsable__title">{this.props.title}</h3>
          <img src={navArrow} alt="" className="collapsable__arrow" />
        </div>
        {this.state.open && this.handlePropTypes()}
      </div>
    );
  }
}

export default Collapsable;
