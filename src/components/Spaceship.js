// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ol>
          <li>Speed: {this.props.speed}</li>
          <li>Rocket Capable: {this.props.hasRockets}</li>
          <li>Colors: {this.props.colors}</li>
        </ol>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}

export default Spaceship
