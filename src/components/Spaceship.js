// Code The Spaceship Component Here
import React from 'react';


export default class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h1> Hello, this is {this.props.name} </h1>
        <small>The speed is {this.props.speed} </small>
        <small>Has rockets? {this.props.hasRockets} </small>
        <small>What colors? {this.props.colors.join(', ')}</small>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}
