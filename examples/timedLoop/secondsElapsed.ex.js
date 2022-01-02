const timedLoop = require('../../src/lib/timedLoop');

var seconds = 0;
timedLoop(1000, function() {
  seconds = seconds + 1;
  console.log(seconds + " seconds have elapsed");
});