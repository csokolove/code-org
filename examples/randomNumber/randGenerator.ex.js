const randomNumber = require('../../src/lib/randomNumber');

// Generate random number in the positives
console.log(`Positive ints: ${randomNumber(1, 10)}`);

// Generate random number in the positives & 0
console.log(`Positive ints & 0: ${randomNumber(0, 10)}`);

// Generate random number in the negatives
console.log(`Negative ints: ${randomNumber(-10, -1)}`);

// Generate random number in the negatives & 0
console.log(`Negative ints & 0: ${randomNumber(-10, 0)}`);

// Generate number 0
console.log(`0: ${randomNumber(0, 0)}`);

// Generate number -0
console.log(`-0: ${randomNumber(-0, -0)}`);

// Generate number in mass range
console.log(`All ints: ${randomNumber(-100, 100)}`);

// Generate number w/ Sq. Rt. of -1 (should be NaN)
console.log(`Sq. Rt. -1: ${randomNumber(Math.sqrt(-1), Math.sqrt(-1))}`);