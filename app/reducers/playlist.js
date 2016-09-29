import * as types from '../constants'

const initialPlaylistState = {
  list: []
}

export default function playlist(state = initialPlaylistState, action) {

  switch (action.type) {
    case types.PLAYLIST_ADD:
      return Object.assign({}, state, { list: [].concat(state.list, action.item) })
    default:
      return state
  }
}