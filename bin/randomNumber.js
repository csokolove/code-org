/**
 * @param {Number} [min=0] - The minimum number returned 
 * @param {Number} max - The maximum number returned
 * @returns Random number in the closed range from min to max
 */

const randomNumber = (min, max) => {
    if (typeof(min) !== 'number') {
        if (min === undefined) {
            min = 0;
            max = 0;
        } else {
            throw new Error(`${max ? 'Min' : 'Max'} must be a number`);
        }
    }
    
    if (max === undefined) {
        max = min;
        min = 0;
    } else if (typeof(max) !== 'number') throw new Error('Max must be a number')

    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = randomNumber;