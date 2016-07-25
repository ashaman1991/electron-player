import Hello from './components/menu.js';
import React from 'react';
import ReactDOM from 'react-dom';

require('font-awesome-webpack');
require('../styles/style.scss');

ReactDOM.render(
  <Hello />,
  document.getElementById('content')
);