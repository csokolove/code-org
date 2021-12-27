const glob = require('glob');
const path = require('path');

glob.sync('./bin/*.js').forEach(function(file) {
    require(path.resolve(file));
})