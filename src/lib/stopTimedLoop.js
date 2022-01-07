/**
 * Stops any running timedLoops, or a specific one if passed in return value of `timedLoop`
 * @param {Number/Object} loop The value returned by the `timedLoop()` function that you want to stop. If not included, all running timed loops will stop.
 */

const { getAllIntervals } = require('../bin/globalIntervals');

// https://stackoverflow.com/questions/8635502/how-do-i-clear-all-intervals
// https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts

const stopTimedLoop = (loop = false) => {
    if(typeof loop === 'object') {
        clearInterval(loop.id);
    } else if (typeof loop === 'number') {
        clearInterval(loop);
    } else if (!loop) {
        const arr = getAllIntervals();

        arr.forEach((id) => {
            console.log('setInterval ID [allLoops]: ' + id);
            clearInterval(id);
        }); 
    } else {
        throw new Error(`Expecting timeLoop object, ID or empty parameter to clear all timeLoops.`);
    }
}

module.exports = stopTimedLoop;