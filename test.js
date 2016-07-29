var Player = require('player');

// create player instance 
var player = new Player('./marshmallow.mp3');

// play now and callback when playend 
// event: on playing 
player.on('playing', function (item) {
  console.log('im playing... src:' + JSON.stringify(item));
});

// event: on playend 
player.on('playend', function (item) {
  // return a playend item 
  console.log('src:' + item + ' play done, switching to next one ...');
});

// event: on error 
player.on('error', function (err) {
  // when error occurs 
  console.log(err);
});

player.play(function (err, player) {
  console.log('playend!');

});





