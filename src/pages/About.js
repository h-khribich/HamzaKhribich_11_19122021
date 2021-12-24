import React from "react";
import Banner from "../components/Banner";
import Collapsable from "../components/Collapsable";
import Footer from "../components/Footer";
import Header from "../components/Header";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <Banner about={true} />
          <div className="collapsable__group-wrapper">
            <Collapsable
              title={"Fiabilité"}
              id={"Fiabilité"}
              description={
                "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
              }
            />
            <Collapsable
              title={"Respect"}
              id={"Respect"}
              description={
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
              }
            />
            <Collapsable
              title={"Service"}
              id={"Service"}
              description={
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
              }
            />
            <Collapsable
              title={"Sécurité"}
              id={"Sécurité"}
              description={
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
              }
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
