// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component{
  render(){
    return(
    <div className="space-ship">
    <title>{this.props.name} </title>
    <ol>
    <h1>{this.props.speed}</h1>
    <h2>{this.props.hasRockets}</h2>
    <small>Colors:{this.props.colors}</small>
    </ol>
    </div>
    )
  }
}

Spaceship.defaultProps = {
  speed:"slow",
  hasRockets : false,
  colors: ['black', 'red']
}

export default Spaceship;
