import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Play from 'material-ui/svg-icons/av/play-circle-filled';
import Stop from 'material-ui/svg-icons/av/stop';
import Pause from 'material-ui/svg-icons/av/pause-circle-filled';
import ReactPlayer from 'react-player'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const remote = require('electron').remote;
const dialog = remote.dialog;
const path = require('path');
const styles = {
  medium: {
    // width: 96,
    // height: 96,
    padding: 9,
  },
  mediumIcon: {
    width: 40,
    height: 40,
  }
};

export default class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add() {
    dialog.showOpenDialog(
      {
        filters: [
          { name: 'Audio files', extensions: ['mp3'] },
          { name: 'All Files', extensions: ['*'] }
        ],
        properties: ['openFile']
      },
      ([file, ...rest]) => {
        this.props.add(file)
        if (!this.props.current.length) this.props.setCurrent(file)
      });
  }

  getFileName(filePath) {
    return path.basename(filePath);
  }

  render() {
    return <div>
      <ReactPlayer
        url={this.props.current}
        playing={this.props.isPlaying}
        hidden={true} />
      <Toolbar>
        <ToolbarGroup >
          <IconButton onClick={this.props.play} tooltip="Play" iconStyle={styles.mediumIcon}
            style={styles.medium} tooltipPosition="bottom-center">
            <Play />
          </IconButton>
          <IconButton onClick={this.props.pause}  tooltip="Pause" iconStyle={styles.mediumIcon}
            style={styles.medium} tooltipPosition="bottom-center">
            <Pause />
          </IconButton>
          <IconButton onClick={() => { } }  tooltip="Stop" iconStyle={styles.mediumIcon}
            style={styles.medium} tooltipPosition="bottom-center">
            <Stop />
          </IconButton>
          <RaisedButton onClick={this.add}> Open </RaisedButton> <br/>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup >
          <ToolbarTitle text={this.getFileName(this.props.current) } />
        </ToolbarGroup>
      </Toolbar>
    </div>
  }
}