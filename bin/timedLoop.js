/**
 * Executes the callback everytime a certain number of milliseconds has elapsed
 * @param {Number} ms - The number of milliseconds to wait before each repetition of the loop
 * @param {Function} cb - The callback that handles the response
 * @todo Implement ability to end loop utilizing stopTimedLoop
 */

const timedLoop = (ms, cb) => {
    if (typeof(ms) !== 'number') throw new Error('Ms (milliseconds) must be a number');
    setInterval(cb, ms);
}

module.exports = timedLoop;