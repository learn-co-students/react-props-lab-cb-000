import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship-info">
        <table>
          <tr>
            <th>Name</th>
            <th>Speed</th>
            <th>Has Rockets?</th>
            <th>Colors</th>
          </tr>
          <tr>
            <td>{ this.props.name }</td>
            <td>{ this.props.speed }</td>
            <td>{ this.props.hasRockets }</td>
            <td>{ this.props.colors }</td>
          </tr>
        </table>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
