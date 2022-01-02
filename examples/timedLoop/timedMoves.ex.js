const timedLoop = require('../../src/lib/timedLoop');
const stopTimedLoop = require('../../src/lib/stopTimedLoop');
const randomNumber = require('../../src/lib/randomNumber');

// CURRENTLY DISFUNCTIONAL.
/*
Currently pending addition of:
- move
and completion of:
- stopTimedLoop
*/

// Make 10 random turtle moves in half second intervals. 
var count=0;
timedLoop(500, function(){
  var x = randomNumber(-50, 50);
  var y = randomNumber(-50, 50);
  console.log("Move " + x + " horizontally and " + y + " vertically.");
  move(x, y);
  count=count+1;
  if (count==10) {
  	stopTimedLoop();
  }
});