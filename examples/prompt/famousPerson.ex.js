const prompt = require('../../src/lib/prompt');

// READ BELOW

// ORIGINAL EXAMPLE: https://studio.code.org/docs/applab/declareAssign_x_prompt/

/*
code.org does not require async/await when implementing prompt as they use the in-browser prompt feature.
Once, and if, there is compatability with in-browser utilizing this library, there will be an option to either use readline or in-browser prompt
With readline, this must be asynchronous, and is implemented using an IIFE
*/

(async() => {
    // Name a famous person you admire.
    var firstName = await prompt("What's your famous person's first name?");
    var lastName = await prompt("What's your famous person's last name?");
    console.log("Hi " + firstName + " " + lastName);
})()