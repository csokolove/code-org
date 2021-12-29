/**
 * Removes an item from an array (list) at the specified index position.
 * @param {Object} array The variable name of the array (list) you want to remove an item from.
 * @param {Number} index The index position you want to remove the item from.
 * @link https://studio.code.org/docs/applab/removeItem/
 */

const removeItem = (array, index) => {
    if (!arguments[1]) throw new Error('All parameters are required');
    if (typeof(array) !== 'object') throw new TypeError('Array must be referenced as a variable');

    // JavaScript will natively catch if the array referenced is undefined

    if (isNaN(index)) {
        index = parseInt(index)
        if (isNaN(index)) {
            array.splice(0, 1)
        } else {
            array.splice(index, 1);
        }
    } else {
        array.splice(index, 1)
    }
}

module.exports = removeItem;