/**
 * Executes the callback everytime a certain number of milliseconds has elapsed
 * @param {Number} ms - The number of milliseconds to wait before each repetition of the loop
 * @param {Function} cb - The callback that handles the response
 * @todo Implement ability to end loop utilizing stopTimedLoop
 * @todo How to store ID of each interval to be able to stop it
 */

const timedLoop = (ms, cb) => {
    if (!arguments[1]) throw new Error('All parameters are required');

    if (typeof ms !== 'number') throw new TypeError('Ms (milliseconds) must be a number');
    if (typeof cb !== 'function') throw new TypeError('The callback must be a function');

    const loopId = setInterval(cb, ms);

    const returnObj = {
        id: loopId,
        interval: ms,
        callback: cb,
    }; 

    // Return Timed Loop Object:
    // https://studio.code.org/docs/applab/timedLoop/#:~:text=loop%20is%20repeated.-,returns,-Returns%20a%20timed
    return returnObj;
};

module.exports = timedLoop;