import React from 'react';

class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <h1>Name: { this.props.name }</h1>
        <p>Speed: { this.props.speed }</p>
        <p>Has rockets: { this.props.hasRockets }</p>
        <p>{ this.props.colors.join(', ') }</p>
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
