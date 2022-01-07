const stopTimedLoop = require('../../src/lib/stopTimedLoop');
const timedLoop = require('../../src/lib/timedLoop');

var countdown1 = 10;
var i = timedLoop(1000, function() {
  countdown1 = countdown1 - 1;
  console.log('countdown1: ' + countdown1)
});

var countdown2 = 20;
var o = timedLoop(1000, function() {
  countdown2 = countdown2 - 1;
  console.log('countdown2: ' + countdown2)
});

var countdown3 = 30;
var p = timedLoop(1000, function() {
  countdown3 = countdown3 - 1;
  console.log('countdown3: ' + countdown3)
});

setTimeout(() => {
    stopTimedLoop();
}, 5000);