const stopTimedLoop = require('../../src/lib/stopTimedLoop');
const timedLoop = require('../../src/lib/timedLoop');

var countdown = 10;
var i = timedLoop(1000, function() {
  countdown = countdown - 1;
  console.log(countdown)
  if(countdown === 0) {
    stopTimedLoop(i);
  }
});