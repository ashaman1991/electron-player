import Player from './containers/player.js';
import Playlist from './containers/playlist'
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Devtools from './containers/devtools'

require('font-awesome-webpack')
require('./assets/styles/style.scss')

const store = createStore(reducer, Devtools.instrument())

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Player />
        <Playlist />
      </div>
    </MuiThemeProvider>
  </Provider >,
  document.getElementById('content')
);

//        <Devtools />