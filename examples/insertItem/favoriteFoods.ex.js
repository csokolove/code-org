const insertItem = require('../../src/lib/insertItem');

// List of favorite foods.
var myFavoriteFoods=["pizza","steak"];
console.log(myFavoriteFoods + " length=" +myFavoriteFoods.length);
insertItem(myFavoriteFoods, 1, "artichokes");
console.log(myFavoriteFoods + " length=" +myFavoriteFoods.length);
insertItem(myFavoriteFoods, 4, "shrimp");
console.log((myFavoriteFoods + " length=") +myFavoriteFoods.length);