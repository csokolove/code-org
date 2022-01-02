const addPair = require('../../src/lib/addPair');
const prompt = require('../../src/lib/prompt');

(async() => {
    var phoneNumbers = {
        "Brendan": "520-555-1827",
        "Alicia": "510-555-9182",
        "Omar": "720-555-2817",
        "Emergency": "911"
    };
    
    var name = await prompt("Enter the new name you want to add to your contact list");
    var number = await prompt("Enter the new phone number");
    addPair(phoneNumbers, name, number);
    console.log(name + ": " + number + " was successfully added to your phone numbers");
})()