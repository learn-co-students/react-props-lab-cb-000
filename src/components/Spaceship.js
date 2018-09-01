import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;

    return (
      <div className="spaceship">
        <div className="spaceship-name">
          <p>Name: {name}</p>
        </div>
        <div className="spaceship-speed">
          <p>Speed: {speed}</p>
        </div>
        <div className="spaceship-weapons">
          <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
        </div>
        <div className="spaceship-colors">
          <p>Colors:</p>
          <ul>
            {colors.map((color, index) =>  <li key={index}>{color}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
