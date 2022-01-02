const addPair = require('../../src/lib/addPair');
const prompt = require('../../src/lib/prompt');
const getValue = require('../../src/lib/getValue');

(async() => {
    var abbreviations = {
        "LOL": "Laugh out loud",
        "TIL": "Today I Learned",
        "LGTM": "Looks Good To Me",
        "FWIW": "For What It's Worth",
        "FYI": "For Your Information"
    };
    
    console.log("Hello! I am learning new abbreviations! Would you like to look up an abbreviation, or teach me a new one?");
    var choice = await prompt("(1) Look Up an Abbreviation (2) Teach a New Abbreviation");
    
    if(choice == 1) {
        var word = await prompt("What abbreviation do you want to look up?");
        var definition = getValue(abbreviations, word);
        console.log(word + ": " + definition);
    }
    if(choice == 2) {
        var word = await prompt("What is the new abbreviation?");
        var definition = await prompt("What does it mean?");
        addPair(abbreviations, word, definition);
        console.log("Successfully Added!");
    }
})()