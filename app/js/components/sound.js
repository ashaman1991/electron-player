import React from 'react';
const remote = require('electron').remote;
const dialog = remote.dialog;
// const fs = require('fs');
const Player = require('player');

export default class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: './build/marshmallow.mp3',
      player: new Player()
    };
    this.openThing = this.openThing.bind(this);
    this.play = this.play.bind(this);

    this.state.player.on('playing', function (item) {
      console.log('im playing... src:' + item);
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
      console.log(this.state);
      this.state.player.stop();
      this.state.player._list = [];
      this.state.player.add(this.state.current);
      this.state.player.play();
    }
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
        this.setState({ current: file });
      });
  }

  render() {
    return <div>
      <h1>{this.state.current}</h1>
      <button onClick={this.openThing}> Open </button> <br/>
      <button onClick={this.play}> <i className='fa fa-play'> </i>Play </button>
    </div>;
  }
}
