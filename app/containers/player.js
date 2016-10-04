import { connect } from 'react-redux'
import _Player from '../components/player'
import * as actions from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    play: () => { dispatch(actions.play()) },
    pause: () => { dispatch(actions.pause()) },
    stop: () => { },
    next: () => { },
    previous: () => { },
    add: (item) => {
      dispatch(actions.playlistAdd(item))
    },
    setCurrent: (item) => {
      dispatch(actions.setCurrent(item))
    },
    setProgress: ({played, loaded}) => {
      dispatch(actions.setProgress(played))
    },
    setCurrentDuration: (duration) => {
      dispatch(actions.setCurrentDuration(duration))
    },
    setVolume: (event, volume) => {
      dispatch(actions.setVolume(volume))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    current: state.player.current,
    palyingName: state.player.playingName,
    progress: state.player.progress,
    // status: 'stopped',
    isPlaying: state.player.isPlaying,
    volume: state.player.volume,
    duration: state.player.duration
  }
}

const Player = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Player)

export default Player
