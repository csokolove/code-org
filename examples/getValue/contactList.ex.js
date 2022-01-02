const getValue = require('../../src/lib/getValue');
const prompt = require('../../src/lib/prompt');

(async() => {
    var phoneNumbers = {
        "Brendan": "520-555-1827",
        "Alicia": "510-555-9182",
        "Omar": "720-555-2817",
        "Emergency": "911"
    };
    
    var name = await prompt("Enter the phone number you want to look up (Brendan, Alicia, Omar, Emergency)");
    var number = getValue(phoneNumbers, name);
    console.log(name + ": " + number);
})()
