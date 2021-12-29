/**
 * Gets the value associated with a specific `key` in an object.
 * @param {Object} object The object to access the value from.
 * @param {String} key The name of the key to look up the value for in `object`.
 * @link https://studio.code.org/docs/applab/getValue/
 */

const getValue = (object, key) => {
    if (typeof(object) !== 'object') throw new TypeError('The object must be a valid object');
    if (typeof(key) !== 'string') throw new TypeError('The key must be a valid string');

    return object[key];
}

module.exports = getValue;