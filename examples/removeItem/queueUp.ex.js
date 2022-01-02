const removeItem = require('../../src/lib/removeItem');
const appendItem = require('../../src/lib/appendItem');

// Use a list to simulate a queue, removing people from the front of the list and adding people to the rear.
var myQueue=["Max", "Clara", "Julia", "Lucas"];
console.log(myQueue);
removeItem(myQueue, 0);
removeItem(myQueue, 0);
console.log(myQueue);
appendItem(myQueue, "Martha");
console.log(myQueue);
removeItem(myQueue, 0);
console.log(myQueue);