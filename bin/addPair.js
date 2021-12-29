/**
 * Add a new key/value pair to an existing object.
 * @param {Object} object The object to add the key and value pair.
 * @param {String} key The name of the key to look up the value for in the object.
 * @param {*} value The value to store in the object under the key provided.
 * @link https://studio.code.org/docs/applab/addPair/
 */

const addPair = (object, key, value) => {
    if(!arguments[2]) throw new Error('All parameters are required');
    if (typeof(object) !== 'object') throw new TypeError('The object must be a valid object');
    if (typeof(key) !== 'string') throw new TypeError('The key must be a valid string');

    object[key] = value;
}

module.exports = addPair;