const openPkg = require('open');
const colors = require('colors');

/**
 * Open a URL in the computer's default browser
 * @param {String} url - The URL to open
 * @example https://code.org (valid URL)
 * @example www.code.org (gray area, providing a protocol is recommended)
 * @example code.org (invalid URL)
 * @link https://studio.code.org/docs/applab/open/
 */

const open = async (url) => {
    if (typeof(url) !== 'string') throw new TypeError('URL must be a string');

    try {
        new URL(url);
        console.log(colors.yellow(`WARNING: The function open() is opening a URL in your default browser (${url})`))
        await openPkg(url);
    } catch (_) {
        console.log(`Attempting to open requested URL (${url}), however it may be malformed. It is highly recommended to provide a protocol in the URL`)
        await openPkg(url);
    }
}

module.exports = open;