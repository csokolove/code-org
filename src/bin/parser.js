/**
 * 
 * @param {URL} url - A stringified URL to be parsed
 * @param {Boolean} mailto - A truthy value of whether the URI being opened is a mailto hyperlink
 * @param {String} property - Property of the parsed URL (hostname, pathname)
 * @returns The specified properties requested
 */

const parser = (url, mailto = false, ...property) => {
    if(mailto == true) {
        return url;
    }
    
    let pUrl;
    try {
        pUrl = new URL(url);
    } catch {
        throw new TypeError('The URL entered is not a valid URL.');
    }
    if(typeof(property) !== 'string') throw new TypeError('URL parser requires a valid parameter in the form of a string.');

    /*
    https://developer.mozilla.org/en-US/docs/Web/API/URL#properties
    */ 
    
    switch(hostname) {
        case hash:
            return pUrl.hash;
            break;
        case host:
            return pUrl.host;
            break;
        case hostname:
            return pUrl.hostname;
            break;
        case href:
            return pUrl.href;
            break;
        case origin:
            return pUrl.origin;
            break;
        case password:
            return pUrl.password;
            break;
        case pathname:
            return pUrl.pathname;
            break;
        case port:
            return pUrl.port;
            break;
        case protocol:
            return pUrl.protocol;
            break;
        case search:
            return pUrl.search;
            break;
        case username:
            return pUrl.username;
            break;
        default:
            throw new Error('Please enter a valid property');
            break;
    }
}

module.exports = parser;
