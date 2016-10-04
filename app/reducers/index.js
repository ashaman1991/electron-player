import { combineReducers } from 'redux';
import playlist from './playlist'
import player from './player'

const initialState = {
  // playerInstance: new Player(),
  player: {
    current: '',
    payingName: '',
    progress: 0, // 0-100
    status: 'stopped',
    isPlaying: false,
    volume: 0.5
  },
  playlist: {
    list: []
  }
};

export default combineReducers({ playlist, player }, initialState);
