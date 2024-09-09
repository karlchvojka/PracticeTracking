/**
 * Pyramid Generator - FCC Project
 * 
 * Generates a pyramid of characters.
 * @function
 * @param {string} character Character to be used within the Generator
 * @param {number} count How many rows the Pyramid will have
 * @param {array} rows Variable to hold the rows of the pyramid
 * @param {string} result String to be printed in the console
 * @returns {string}
 */
// Variable Declarations:
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
}

for(let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows){
    result = result + "\n" + row;
}
console.log(result);
