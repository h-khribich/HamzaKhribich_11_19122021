import React from "react";

class Accomodation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

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
            <div
              key={logement.id}
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
          ))}
          {data.length % 2 == 0 && (
            <div
              className="accomodation__thumbnail"
              style={{ opacity: 0 }}
            ></div>
          )}
        </div>
      );
    }
  }
}

export default Accomodation;
