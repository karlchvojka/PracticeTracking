/**
 * Average Calculator - FCC Project
 *
 * Returns the average of an array of numbers
 * @function
 * @param {array} scores An array of numbers.
 * @returns {number}
 */
function getAverage(scores) {
    // Variable declarations
    let total = 0;

    // Sum numbers from entered array.
    for (const score of scores) {
        total += score;
    }
    // Calculate the average.
    return total / scores.length;

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
