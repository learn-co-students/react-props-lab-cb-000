import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
        <div className="space-ship">
          <h1>Name: {this.props.name}</h1>
          <p>Speed: {this.props.speed}</p>
          <p>Has Rockets?: {this.props.hasRockets}</p>
          <p>Colors: {this.props.colors}</p>
          
          
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
