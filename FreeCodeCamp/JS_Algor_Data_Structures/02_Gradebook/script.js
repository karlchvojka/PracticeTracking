/**
 * Gradebook - FCC Project
 *
 * Gradebook project from the 'JS Algorithms and Data Scrutures section of the FCC Curriculum.
 *
 */
/**
 * Average Calculator - FCC Project
 *
 * Returns the average of an array of numbers
 * @function getAverage
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

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
