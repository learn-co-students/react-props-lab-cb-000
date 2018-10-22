// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render(){
    return (
      <div class="spaceship">
        <p>name: {this.props.name}</p>
        <p>speed: {this.props.speed}</p>
        <p>has rockets: {this.props.hasRockets}</p>
        <p>colors: {this.props.colors}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors : ['black', 'red']
};
