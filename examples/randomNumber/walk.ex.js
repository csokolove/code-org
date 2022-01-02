const randomNumber = require('../../src/lib/randomNumber');

// CURRENTLY DISFUNCTIONAL.
/*
Currently pending addition of:
- moveForward
- turnRight
*/

// Do a "random walk" of 4 steps, turning a random number of degrees after each step.
moveForward();
turnRight(randomNumber(-90, 90));
moveForward();
turnRight(randomNumber(-90, 90));
moveForward();
turnRight(randomNumber(-90, 90));
moveForward();