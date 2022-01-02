/**
 * Stops any running timedLoops, or a specific one if passed in return value of `timedLoop`
 * @param {Number} loop The value returned by the `timedLoop()` function that you want to stop. If not included, all running timed loops will stop.
 * @todo Implement ability to stop individual loops, or all loops
 */

const stopTimedLoop = (loop) => {
    if(loop) {
        if(isNaN(loop)) throw new Error(`Loop ID must be a valid integer`);
        clearInterval(loop);
    } else {
        // loop through loopsGenByLib array in timedLoop.js & clearInterval()
    }
}

module.exports = stopTimedLoop;