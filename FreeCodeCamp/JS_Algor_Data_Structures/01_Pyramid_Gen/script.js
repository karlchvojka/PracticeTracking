/**
 * Pyramid Generator - FCC Project
 * 
 * Generates a pyramid of characters.
 * @function
 * @param {string} character Character to be used within the Generator
 * @param {number} count How many rows the Pyramid will have
 * @param {boolean} inverted Assigns if the Pyramid should be generated upside down
 * @param {array} rows Variable to hold the rows of the pyramid
 * @param {string} result String to be printed in the console
 * @returns {string}
 */
// Variable Declarations:
const character = "#";
const count = 8;
let inverted = true;
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

// TODO: use a different type of loop

for(let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

/*
while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}
*/

/*
Creates the pyramid, but updside down.
for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}
*/

let result = "";

for (const row of rows){
    result = result + "\n" + row;
}
console.log(result);
