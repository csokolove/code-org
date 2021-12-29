/**
 * Stops any running timedLoops, or a specific one if passed in return value of `timedLoop`
 * @param {Number} loop The value returned by the `timedLoop()` function that you want to stop. If not included, all running timed loops will stop.
 * @todo Implement ability to stop individual loops, or all loops
 */

// https://stackoverflow.com/questions/8635502/how-do-i-clear-all-intervals
// https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts

const stopTimedLoop = (loop) => {
    if(loop) {
        if(isNaN(loop)) throw new Error(`Loop ID must be a valid integer`)

    } else {

    }
}

module.exports = stopTimedLoop;