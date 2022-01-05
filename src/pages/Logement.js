import React from "react";
import Collapsable from "../components/Collapsable";
import LogementDescription from "../components/LogementDescription";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import NotFound from "../pages/NotFound";

class Logement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  // Fetching and filtering data by its id
  getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((jsonResponse) => {
        const urlId = this.props.match.params.id;
        const itemToShow = jsonResponse.find((item) => item.id === urlId);

        if (itemToShow) {
          this.setState({
            isLoaded: true,
            data: itemToShow,
          });
        } else {
          this.setState({ error: true });
        }
      });
  }
  componentDidMount() {
    this.getData("..//data/logements.json");
  }
  render() {
    const { error, isLoaded, data } = this.state;

    // Handling error scenarios
    if (error) {
      return <NotFound />;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      // Adding Ids to collapsables to be able to catch them in DOM for animations
      return (
        <div>
          <div className="wrapper">
            <Header />
            <Gallery pictures={data.pictures} />
            <LogementDescription
              title={data.title}
              location={data.location}
              tags={data.tags}
              name={data.host.name}
              picture={data.host.picture}
              rating={data.rating}
            />
            <div className="collapsable__logement-group">
              <Collapsable
                title={"Description"}
                id={"Description"}
                description={data.description}
              />
              <Collapsable
                title={"Équipements"}
                id={"Équipements"}
                equipments={data.equipments}
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
