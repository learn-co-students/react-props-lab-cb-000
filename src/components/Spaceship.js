// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Rockets: {this.props.hasRockets ? "Yes" : "No"}</h3>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
