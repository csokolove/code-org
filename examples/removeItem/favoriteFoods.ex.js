const removeItem = require('../../src/lib/removeItem');

// List of favorite foods.
var myFavoriteFoods=["pizza", "artichokes", "steak", "shrimp"];
console.log(myFavoriteFoods + " length=" +myFavoriteFoods.length);
removeItem(myFavoriteFoods, 1);
console.log(myFavoriteFoods + " length=" +myFavoriteFoods.length);
removeItem(myFavoriteFoods, 1);
console.log((myFavoriteFoods + " length=") +myFavoriteFoods.length);