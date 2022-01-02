const getTime = require('../../src/lib/getTime');

// CURRENTLY DISFUNCTIONAL.
/*
Currently pending addition of:
- textLabel
- button
- onEvent
- setText
*/

// Calculate the elapsed time for 5 clicks.
var start=0;
var stop=0;
textLabel("instructions", "Click the button five times as fast as you can");
button("gameButton", "Click me!");
textLabel("results", "");
var count = 0;
onEvent("gameButton", "click", function(){
  if (count==0) start=getTime();
  count = count + 1;
  if (count==5) {
    stop=getTime();
    setText("results", "You clicked 5 times in " + (stop-start) + " milliseconds.");
  }
});