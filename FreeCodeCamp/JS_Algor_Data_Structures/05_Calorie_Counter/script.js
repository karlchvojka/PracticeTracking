/**
 *  Calorie Counter - FCC Project
 *
 *  Calorie Counter project from the 'JS Algorithms and Data Structures section of the FCC Curriculum/
 */

/* --- INTERFACE VARIABLES --- */

const caldorieCounter = document.getElementById('calorie-counter');

// Input Element Variables
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');

// Interactable Element Variables
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');

// Display Element Variables
const output = document.getElementById('output');

/* --- END INTERFACE VARIABLES --*/

/* --- APP DATA --- */
let isError = false;
/* --- END APP DATA --- */

/* --- GLOBAL FUNCTIONS ---*/

/**
 * Clean Input String
 *
 * Remove +, -, and whitespace variables
 * @function cleanInputString
 * @param {string} str Data from input.
 * @returns {string} sanitized string.
 */
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

/**
 * Is Invalid Input
 *
 * Checks for invalid inputs
 * @function isInvalidInput
 * @param {string} str Data from input
 * @returns {array} Array from the match() return.
 */
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}
console.log(isInvalidInput("10"));
/* --- END GLOBAL FUNCTIONS ---*/
