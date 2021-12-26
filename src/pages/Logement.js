import React from "react";
import Collapsable from "../components/Collapsable";
import LogementDescription from "../components/LogementDescription";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Logement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }
  componentDidMount() {
    // Catching id from search params
    let urlId = this.props.match.params.logement_id;

    // Fetching and filtering data by its id
    fetch("/data/logements.json")
      .then((res) => res.json())
      .then(
        (results) => {
          this.setState({
            isLoaded: true,
            data: results.filter((result) => result.id === urlId),
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
    const logement = data[0];

    // Handling error scenarios
    if (error) {
      return <div>Erreur: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      // Adding Ids to collapsables to be able to catch them in DOM for animations
      return (
        <div>
          <div className="wrapper">
            <Header />
            <LogementDescription
              title={logement.title}
              location={logement.location}
              tags={logement.tags}
              name={logement.host.name}
              picture={logement.host.picture}
              rating={logement.rating}
            />
            <div className="collapsable__logement-group">
              <Collapsable
                title={"Description"}
                id={"Description"}
                description={logement.description}
              />
              <Collapsable
                title={"Équipements"}
                id={"Équipements"}
                equipments={logement.equipments}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default Logement;
