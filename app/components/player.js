import React from 'react';
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Play from 'material-ui/svg-icons/av/play-circle-filled';
import Stop from 'material-ui/svg-icons/av/stop';
import Pause from 'material-ui/svg-icons/av/pause-circle-filled';
import ReactPlayer from 'react-player'
import Slider from 'material-ui/Slider'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import audioMetaData from 'audio-metadata'
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
  }

  getFileName(filePath) {
    return path.basename(filePath);
  }

  addFile(e) {
    const file = e.target.files[0];

    var reader = new FileReader();

    reader.onload =  (e) =>{
      const metadata = audioMetaData.id3v2(e.target.result);
      const keys = Object.keys(metadata);
      keys.forEach((key) => {
        metadata[key] = metadata[key].slice(2);
      });
      metadata.path = file.path;
      this.props.add(metadata);
      if (!this.props.current.title.length) this.props.setCurrent(metadata)

      console.log(arguments, metadata);
    };

    reader.readAsArrayBuffer(file);
  }

  render() {
    return <div>
      <div className='outer-button'>
        <label className='inner-button'>
          <ContentAdd />
          <input type='file' style={{ display: 'none' }} onChange={this.addFile.bind(this)} />
        </label>
      </div>
      <ReactPlayer
        url={this.props.current.path}
        playing={this.props.isPlaying}
        volume={this.props.volume}
        onDuration={this.props.setCurrentDuration}
        onReady={console.log.bind(console)}
        onStart={console.log.bind(console)}
        onPlay={console.log.bind(console)}
        onProgress={this.props.setProgress}
        onPause={console.log.bind(console)}
        onBuffer={console.log.bind(console)}
        onEnded={console.log.bind(console)}
        onError={console.log.bind(console)}
        progressFrequency={Number(100)}
        hidden={true} />
      <Toolbar>
        <ToolbarGroup >
          <IconButton onClick={this.props.play} tooltip="Play" iconStyle={styles.mediumIcon}
            style={styles.medium} tooltipPosition="bottom-center">
            <Play />
          </IconButton>
          <IconButton onClick={this.props.pause} tooltip="Pause" iconStyle={styles.mediumIcon}
            style={styles.medium} tooltipPosition="bottom-center">
            <Pause />
          </IconButton>
          <IconButton onClick={() => { } } tooltip="Stop" iconStyle={styles.mediumIcon}
            style={styles.medium} tooltipPosition="bottom-center">
            <Stop />
          </IconButton>
          <Slider
            style={{ width: 200 }}
            value={this.props.volume}
            onChange={this.props.setVolume} />
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarTitle text={this.props.duration} />
        </ToolbarGroup>
      </Toolbar>
      <Toolbar>
        <ToolbarGroup >
          <ToolbarTitle text={`${this.props.current.title} - ${this.props.current.artist || 'unknown'}`} />
        </ToolbarGroup>
      </Toolbar>

      <Slider value={this.props.progress} />
    </div>
  }
}