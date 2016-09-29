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