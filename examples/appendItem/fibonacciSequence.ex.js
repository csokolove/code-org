const appendItem = require('../../src/lib/appendItem');

// Generate the first 10 numbers in the fibonacci sequence.
var fibonacci=[1,1];
var nextTerm=0;
for (var i=3; i<=10; i++) {
  nextTerm=fibonacci[i-2]+fibonacci[i-3];
  appendItem(fibonacci,nextTerm);
}
console.log(fibonacci);