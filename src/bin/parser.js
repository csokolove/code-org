/**
 * 
 * @param {URL} url - A stringified URL to be parsed
 * @param {String} property - Property of the parsed URL (hostname, pathname)
 * @returns Either the URL's hostname or pathname, depending on the property passed
 */

const parser = (url, property) => {
    let pUrl;
    try {
        pUrl = new URL(url);
    } catch {
        throw new TypeError('The URL entered is not a valid URL.');
    }
    if(typeof(property) !== 'string') throw new TypeError('URL parser requires a valid property in the form of a string.');

    /*
    Options - 
    * https://dmitripavlutin.com/parse-url-javascript/
    * hostname
    * pathname
    */ 

    if (property === 'hostname') {
        return pUrl.hostname;
    } else if (property === 'pathname') {
        return pUrl.pathname;
    } else {
        throw new Error('Please enter a valid property');
    }
}

module.exports = parser;