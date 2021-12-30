const glob = require('glob');
const path = require('path');

glob.sync('./src/lib/*.js').forEach(function(file) {
    require(path.resolve(file));
});