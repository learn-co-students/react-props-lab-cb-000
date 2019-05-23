import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h2>{this.props.hasRockets ? "Its got rockets!" : "No rockets"}</h2>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
 

ReactDOM.render(
  <Spaceship
    name="Millenial Falcon"
  />,
  document.getElementById('global')
);

 
