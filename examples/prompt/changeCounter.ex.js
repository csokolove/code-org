const prompt = require('../../src/lib/prompt');

// READ BELOW
/*
This example originally utilized the write() function, but has been replaced in this example with console.log()
Once, and if, write() is implemented, it will be integrated here
*/

// ORIGINAL EXAMPLE: https://studio.code.org/docs/applab/declareAssign_x_promptNum/

/*
code.org does not require async/await when implementing prompt as they use the in-browser prompt feature.
Once, and if, there is compatability with in-browser utilizing this library, there will be an option to either use readline or in-browser prompt
With readline, this must be asynchronous, and is implemented using an IIFE
*/

(async() => {
    // Count the amount of change a user has.
    var quarters = await prompt("How many quarters do you have?");
    var dimes = await prompt("How many dimes do you have?");
    var nickels = await prompt("How many nickels do you have?");
    var pennies = await prompt("How many pennies do you have?");
    var total = quarters*25 + dimes*10 + nickels*5 + pennies*1;
    console.log("You have " + total + " cents.");
})()