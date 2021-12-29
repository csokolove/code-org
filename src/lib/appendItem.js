/**
 * Appends an item to the end of an array.
 * @param {Object} array The variable name of the array (list) you want to append to the end of.
 * @param {*} item The number or string item to be inserted at the end of the list.
 * @link https://studio.code.org/docs/applab/appendItem/
 */

const appendItem = (array, item) => {
    if (!arguments[1]) throw new Error('All parameters are required'); 
    if (typeof(array) !== 'object') throw new TypeError('Array must be referenced as a variable');

    // JavaScript will natively catch if the array referenced is undefined
    
    array.splice(array.length, 0, item)
}

module.exports = appendItem;