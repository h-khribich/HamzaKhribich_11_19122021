import React from "react";
import { ReactComponent as RatingStar } from "../assets/rating_star.svg";

class LogementDescription extends React.Component {
  constructor(props) {
    super(props);

    this.handleTags = this.handleTags.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handleTags(els) {
    return els.map((el) => (
      <li key={el} className="tag">
        {el}
      </li>
    ));
  }

  handleRating(el) {
    // Original prop to integer for easier manipulation
    let rating = parseInt(el);
    let ratingArray = [];

    for (let i = 0; i < 5; i++) {
      if (rating) {
        ratingArray.push(
          <li key={i}>
            <RatingStar className="full-star" />
          </li>
        );
        rating--;
      } else {
        ratingArray.push(
          <li key={i}>
            <RatingStar className="empty-star" />
          </li>
        );
      }
    }

    return <ul className="rating-list">{ratingArray}</ul>;
  }

  render() {
    return (
      <div className="description">
        <div>
          <h1 className="title">{this.props.title}</h1>
          <h3 className="location">{this.props.location}</h3>
          <ul className="tag-list">{this.handleTags(this.props.tags)}</ul>
        </div>
        <div className="profileAndRating">
          <div className="host">
            <p className="name">{this.props.name}</p>
            <img
              className="picture"
              src={this.props.picture}
              alt={this.props.name}
            />
          </div>
          {this.handleRating(this.props.rating)}
        </div>
      </div>
    );
  }
}

export default LogementDescription;
