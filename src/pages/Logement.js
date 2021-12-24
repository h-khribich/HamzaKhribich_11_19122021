import React from "react";

class Logement extends React.Component {
  render() {
    let id = this.props.match.params.logement_id;
    console.log(id);
    return (
      <div>
        <h1>Logement</h1>
        <p></p>
      </div>
    );
  }
}

export default Logement;
