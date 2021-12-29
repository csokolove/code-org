/**
 * Inserts an item into an array at the specified index position.
 * @param {Object} array The variable name of the array (list) you want to insert the item into.
 * @param {Number} index 	The index position you want to insert the item at.
 * @param {*} item 	The number or string item to be inserted into the list.
 * @link https://studio.code.org/docs/applab/insertItem/
 */

const insertItem = (array, index, item) => {
    if (!arguments[2]) throw new Error('All parameters are required');
    if (typeof(array) !== 'object') throw new TypeError('Array must be referenced as a variable');

    // JavaScript will natively catch if the array referenced is undefined

    if (isNaN(index)) {
        index = parseInt(index)
        if (isNaN(index)) {
            array.unshift(item);
        } else {
            array.splice(index, 0, item);
        }
    } else {
        array.splice(index, 0, item)
    }
}

module.exports = insertItem;