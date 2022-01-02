const stopTimedLoop = require('../../src/lib/stopTimedLoop');
const timedLoop = require('../../src/lib/timedLoop');

// CURRENTLY DISFUNCTIONAL.
/*
Currently pending addition of:
- button
- onEvent
*/

// Run a half second timed loop until a button is pressed.
button("stop", "Stop the timer");
timedLoop(500, function() {
  console.log("Timer code ran!");
});
onEvent("stop", "click", function(){
  stopTimedLoop();
});