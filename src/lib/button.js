// const fileExists = require('../bin/fileExists');

/**
 * Creates a button on the screen displaying the text provided and referenced by the given id at default location (0,0).
 * @param {String} id Unique identifier for the button
 * @param {String} text The text displayed within the button
 * @todo Ensure that an HTML file exists & that the function is being executed within one
 */

 const button = (id, text) => {
    if (!arguments[1]) throw new Error('All parameters are required.');

    if (typeof(id) !== 'string') throw new TypeError(`button() id parameter value (${arguments[0]}) is not a string.`);
    if (typeof(text) !== 'string') throw new TypeError(`button() text parameter (${arguments[1]}) is not a string.`);

    
    let btn = document.createElement("button");
    btn.innerHTML = text;
    document.body.appendChild(btn);
    
}

module.exports = button;