/**
 * Executes the callback everytime a certain number of milliseconds has elapsed
 * @param {Number} ms - The number of milliseconds to wait before each repetition of the loop
 * @param {Function} cb - The callback that handles the response
 * @todo Implement ability to end loop utilizing stopTimedLoop
 * @todo Add interval to loopsGenByLip array
 */
let loopsGenByLib = []; // store any loops created
const timedLoop = (ms, cb) => {
    if(!arguments[1]) throw new Error('All parameters are required');
    
    if (typeof(ms) !== 'number') throw new TypeError('Ms (milliseconds) must be a number');
    if (typeof(cb) !== 'function') throw new TypeError('The callback must be a function');
    
    return setInterval(cb, ms);
}

module.exports = timedLoop;