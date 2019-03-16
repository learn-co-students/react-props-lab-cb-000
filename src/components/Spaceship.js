import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;

    return(
      <div className="spaceship">
        <h2>{name}</h2>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets ? "Equipped" : "Not Equipped"}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
