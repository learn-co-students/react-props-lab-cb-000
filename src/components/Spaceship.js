
// Code The Spaceship Component Here
import React, { Component } from 'react';

class Spaceship extends Component {
  render() {
    return(
      <div>
        <h1>{ this.props.name }</h1>
        <h4>Speed: { this.props.speed }</h4>
        <h4>Rockets: { this.props.hasRockets }</h4>
        <h4>Colors: { this.props.colors.join(', ') }</h4>
      </div>
    );
  }
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
