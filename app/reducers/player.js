import * as types from '../constants'

const initialPlayerState = {
  current: 'https://www.youtube.com/watch?v=rQg2qngyIZM',
  payingName: '',
  progress: 0,
  duration: '0:00',
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
    case types.PLAYER_SET_PROGRESS:
      return Object.assign({}, state, { progress: action.state ? action.state : 0 })
    case types.PLAYER_SET_DURATION:
      return Object.assign({}, state, { duration: action.state ? `${Math.floor(action.state / 60)}:${action.state % 60}` : '0:00' })
    case types.PLAYER_SET_VOLUME:
      return Object.assign({}, state, { volume: action.state ? action.state : 0 })
    default:
      return state
  }
}