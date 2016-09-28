import Hello from './components/menu.js';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('font-awesome-webpack');
require('./assets/styles/style.scss');

ReactDOM.render(
  <MuiThemeProvider>
    <Hello />
  </MuiThemeProvider>,
  document.getElementById('content')
);