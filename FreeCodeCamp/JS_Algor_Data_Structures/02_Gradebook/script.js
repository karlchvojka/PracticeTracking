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

/**
 * Get Letter Grade  - FCC Project
 *
 * Returns a sting value representing the number score.
 * @function getGrade
 * @param {number} score Number value of the score
 * @return {string}
 */
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

/**
 * Has Passing Grade - FCC Project
 *
 * Returns a boolean if the grade is passing or not
 * @function hasPassingGrade
 * @param {number} score Number value of the score
 * @return {boolean}
 */
function hasPassingGrade(score) {
    if (getGrade(score) === "F") {
        return false;
    } else {
        return true;
    }
}

/**
 * Student Message - FCC Project
 *
 * Returns a string to send to student.
 * @function studentMsg
 * @param {array} totalScores Array of numbers of the class scores
 * @param {number} studentScore A individual students score
 * @return {string}
 */
function studentMsg(totalScores, studentScore) {
    if (hasPassingGrade(studentScore) === true) {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
    } else {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
    }
}
const classScores = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
console.log(studentMsg(classScores, 37));
console.log(studentMsg(classScores, 60));
console.log(studentMsg(classScores, 100));
