const { libInterval } = require('./timedLoop');

const stopTimedLoop = (loop) => {
    // if (!libInterval) return;
    clearInterval(libInterval)
}

module.exports = stopTimedLoop;