import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors : ['black', 'red']
};

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('global')
);
