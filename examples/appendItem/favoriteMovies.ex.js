const appendItem = require('../../src/lib/appendItem');

// List of favorite movies.
var myFavoriteMovies=[];
appendItem(myFavoriteMovies, "Star Wars");
appendItem(myFavoriteMovies, "Lord of the Rings");
appendItem(myFavoriteMovies, "Harry Potter");
console.log(myFavoriteMovies);