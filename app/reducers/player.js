import * as types from '../constants'

const initialPlayerState = {
  current: '',
  payingName: '',
  progress: 0,
  status: 'stopped',
  isPlaying: false,
  volume: 0.5
}

export default function player(state = initialPlayerState, action) {
  switch (action.type) {
    case types.PLAYER_PLAY:
      return Object.assign({}, state, { isPlaying: true })
    case types.PLAYER_PAUSE:
      return Object.assign({}, state, { isPlaying: false })
    case types.PLAYER_SET_CURRENT:
      return Object.assign({}, state, { current: action.item })
    default:
      return state
  }
}