import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Playlist from './playlist'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Play from 'material-ui/svg-icons/av/play-circle-filled';
import Stop from 'material-ui/svg-icons/av/stop';
import Pause from 'material-ui/svg-icons/av/pause-circle-filled';

const remote = require('electron').remote;
const dialog = remote.dialog;
const path = require('path');
const Player = require('player');
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
    this.state = {
      current: '',
      payingName: '',
      player: new Player(),
      playlist: []
    };
    this.openThing = this.openThing.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);

    this.state.player.on('playing', (item) => {
      console.log('im playing... src:' + JSON.stringify(item));
    });

    this.state.player.on('playend', function (item) {
      console.log('src:' + item + ' play done, switching to next one ...');
    });

    this.state.player.on('error', function (err) {
      console.log(err);
    });
  }

  componentWillMount() {

  }

  play() {
    if (this.state.current) {
      this.state.player.stop();
      this.state.player._list = [];
      this.state.player.add(this.state.current);
      this.state.player.play();
    }
  }

  pause() {
    this.state.player.pause();
  }

  stop() {
    this.state.player.stop();
  }
  openThing() {
    dialog.showOpenDialog(
      {
        filters: [
          { name: 'Audio files', extensions: ['mp3'] },
          { name: 'All Files', extensions: ['*'] }
        ],
        properties: ['openFile']
      },
      ([file, ...rest]) => {
        this.setState({ current: file, playlist: [].concat(this.state.playlist, file) });
      });
  }

  getFileName(filePath) {
    return path.basename(filePath);
  }

  render() {
    return <div>
      <Toolbar>
        <ToolbarGroup >
          <IconButton onClick={this.play}tooltip="Play" iconStyle={styles.mediumIcon}
      style={styles.medium} tooltipPosition="bottom-center">
            <Play />
          </IconButton>
          <IconButton onClick={this.pause}  tooltip="Pause" iconStyle={styles.mediumIcon}
      style={styles.medium} tooltipPosition="bottom-center">
            <Pause />
          </IconButton>
          <IconButton onClick={this.stop}  tooltip="Stop" iconStyle={styles.mediumIcon}
      style={styles.medium} tooltipPosition="bottom-center">
            <Stop />
          </IconButton>
          <ToolbarSeparator />
          <RaisedButton onClick={this.openThing}> Open </RaisedButton> <br/>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup >
          <ToolbarTitle text={this.getFileName(this.state.current)} />
        </ToolbarGroup>
      </Toolbar>
    <Playlist list={this.state.playlist} />

    </div>
  }
}
