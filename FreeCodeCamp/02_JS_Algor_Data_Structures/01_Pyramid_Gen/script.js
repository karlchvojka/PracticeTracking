/**
 * Pyramid Generator - FCC Project
 * 
 * Generates a pyramid of characters.
 * @function
 * @param {string} character Character to be used within the Generator
 * @param {number} count How many rows the Pyramid will have
 * @param {boolean} inverted Assigns if the Pyramid should be generated upside down
 * @param {string} result String to be printed in the console.
 * @param {array} rows Variable to hold the rows of the pyramid
 * @returns {string}
 */
// Variable Declarations:
const character = "!";
const count = 10;
let inverted = false;
let result = "";
const rows = [];

/**
 * Pad Row - Function
 *
 * Function to add padding to a row of characters
 * @function
 * @param {number} rowNumber Which row the iterator is currently on
 * @param {number} rowCount How many total rows there are
 * @returns {string} Row with padding applied to both side of the pyramid.
 */
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/**
 * Iterate 'count' number of times.
 * If Inverted is true, add new lines to the top of the pyramid.
 * Else, add lines to the bottom (normal)
*/
for(let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

/**
 * Iterate over Rows array.
 * For each, add a new row to the results variable.
*/
for (const row of rows){
    result = result + "\n" + row;
}

// Print final result to console.
console.log(result);
