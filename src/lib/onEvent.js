
/**
 * @param {String} id The ID of the UI control to which the event handler applies
 * @param {String} type The type of event to respond to
 * @param {Function} callback The callback function executed in response to an event for the matching UI element *id* of the matching *type*.
 */

 const onEvent = (id, type, callback) => {
    if(!arguments[2]) throw new Error('All parameters are required');

    if(typeof(id) !== 'string') throw new TypeError(`onEvent() id parameter value (${arguments[0]}) is not a string.`)
    if(typeof(type) !== 'string') throw new TypeError(`onEvent() type parameter value (${arguments[1]}) is not a string.`)
    if(typeof(callback) !== 'function') throw new TypeError(`onEvent() callback parameter value (${arguments[2]}) is not a function.`)
    
    const element = document.querySelector(id);
    const event  = type;

    element.addEventListener(element, event, callback)
}

module.exports = onEvent;