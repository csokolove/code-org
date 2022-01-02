const getValue = require('../../src/lib/getValue');

var dictionary = {
    "tortilla": "a thin, flat pancake of cornmeal or flour, eaten hot or cold, typically with a savory filling as a part of Mexican cuisine.",
    "naan": "a type of leavened bread, typically of teardrop shape and traditionally cooked in a clay oven as part of Indian cuisine.",
    "injera": "a white leavened Ethiopian bread made from teff flour, similar to a crêpe."
}

var definition = getValue(dictionary, "tortilla");
console.log("Tortilla: " + definition);
definition = getValue(dictionary, "naan");
console.log("Naan: " + definition);