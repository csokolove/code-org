const fs = require('fs');

const fileExists = (path) => {
    try {
        if (fs.existsSync(path)) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = fileExists;