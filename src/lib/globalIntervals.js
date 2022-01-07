/**
 * Tracks all timeLoops created.
 * @param {Number} id The ID returned by setInterval in the `timedLoop()` function.
 */

let intervals = [];

const storeInterval = (id) => {
    // Check if there are any intervals, currently.
    if (typeof interval === 'undefined') {
        let intervals = [];
        intervals.push(id);
    } else if (typeof interval !== 'undefined') {
        intervals.push(id);
    }
};

const getAllIntervals = () => {
    return intervals;
}