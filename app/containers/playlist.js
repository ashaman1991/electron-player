import { connect } from 'react-redux'
import Playlist from '../components/playlist'

const mapStateToProps = (state) => {
  return {
    list: state.playlist.list
  }
}

const PlayList = connect(
  mapStateToProps
)(Playlist)

export default PlayList
