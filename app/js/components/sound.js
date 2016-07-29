import React from 'react';
const remote = require('electron').remote;
const dialog = remote.dialog;
// const fs = require('fs');

export default class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: './build/marshmallow.mp3' };
    this.openThing = this.openThing.bind(this)
    this.play = this.play.bind(this)
  }

  componentWillMount() {

  }

  play() {
    if (this.state.current) {
      // let player = new Player(this.state.current);
      // console.log(player);
      // // event: on playing 
      // player.on('playing', function (item) {
      //   console.log('im playing... src:' + item);
      // });

      // // event: on playend 
      // player.on('playend', function (item) {
      //   // return a playend item 
      //   console.log('src:' + item + ' play done, switching to next one ...');
      // });

      // // event: on error 
      // player.on('error', function (err) {
      //   // when error occurs 
      //   console.log(err);
      // });

      // player.play();
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
