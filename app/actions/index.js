import * as types from '../constants';

export function playlistAdd(item) {
  return {
    type: types.PLAYLIST_ADD,
    item
  };
}

export function playlistRemove(item) {
  return {
    type: types.PLAYLIST_REMOVE,
    item
  };
}

export function play() {
  return {
    type: types.PLAYER_PLAY
  };
}

export function pause() {
  return {
    type: types.PLAYER_PAUSE
  };
}

export function setCurrent(item) {
  return {
    type: types.PLAYER_SET_CURRENT,
    item
  };
}

export function next() {
  return {
    type: types.PLAYER_NEXT
  };
}

export function prev() {
  return {
    type: types.PLAYER_PREV
  };
}

export function setProgress(state) { 
  return {
    type: types.PLAYER_SET_PROGRESS,
    state
  }
}

export function setCurrentDuration(state) { 
  return {
    type: types.PLAYER_SET_DURATION,
    state
  }
}

export function setVolume(state) { 
  return {
    type: types.PLAYER_SET_VOLUME,
    state
  }
}