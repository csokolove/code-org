const https = require('https');
const http = require('http');
const parser = require('../bin/parser');

/*
Currently dysfunctional
*/

/**
 * Requests data from the internet and executes code when the request is complete.
 * @param {String} url - The web address of a service that returns data.
 * @param {Function} callback - A function that is asynchronously called when the call to startWebRequest() is finished. Three parameters are passed to this function.
 * @todo Check nested params (params inside of the callback param)
 * @todo Properly output the chunked data, and return it dynamically
 */

const startWebRequest = (url, callback) => {
    if(typeof(url) !== 'string') throw new TypeError('URL must be a valid string.');
    if(typeof(callback) !== 'function') throw new TypeError('Callback must be a valid function.');

    // Parse URL
    const options = {
        host: parser(url, 'hostname'),
        path: parser(url, 'pathname'),
        method: 'GET'
    }
    
    if (url.substring(0, 5) === 'https') {
        https.request(options, callback)
    } else if (url.substring(0, 4) === 'http') {
        http.request(options, callback)
    } else {
        throw new Error(`Invalid URI ${url}`);
    }
}

module.exports = startWebRequest;