import React from "react";
import { Link } from "react-router-dom";

class Accomodation extends React.Component {
  constructor(props) {
    super(props);

    // Data will receive result to be mapped
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  // If fetch is unsuccessful, display error, else show result
  componentDidMount() {
    fetch("./data/logements.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  // Mapping through result to display data, show error or loading if need be
  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Erreur: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <div className="accomodation__wrapper">
          {data.map((logement) => (
            <Link key={logement.id} to={`/logement/${logement.id}`}>
              <div
                className="accomodation__thumbnail"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0), 85%, rgba(0, 0, 0, 0.7)), url(" +
                    logement.cover +
                    ")",
                }}
              >
                <h3 className="accomodation__title">{logement.title}</h3>
              </div>
            </Link>
          ))}
          {data.length % 2 === 0 && (
            <div
              className="accomodation__thumbnail thumbnail-invisible"
              style={{ opacity: 0 }}
            ></div>
          )}
        </div>
      );
    }
  }
}

export default Accomodation;
