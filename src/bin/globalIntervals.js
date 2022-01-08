/**
 * Tracks all timeLoops created.
 * @param {Number} id The ID returned by setInterval in the `timedLoop()` function.
 */

let intervals = [];

module.exports = {
    storeInterval: (id) => {
        intervals.push(id);
    },
    getAllIntervals: () => {
        return intervals;
    }
}