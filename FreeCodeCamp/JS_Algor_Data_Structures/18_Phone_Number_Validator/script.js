/**
 * Phone Number Validation Functions
 *
 * Functions for handling validation of phone numbers
 */

/* --- INTERFACE VARIABLES --- */

/**
 * Interface Elements
 */
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const inputField = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');
const resultsText = document.getElementById('resultsText');

/* --- END INTERFACE VARIABLES --- */

/* --- FUNCTIONAL VARIABLES --- */

/**
 * Regex Variables
 *
 * Variables to be used in RegEx tests to validate inputted data.
 */

const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
const countCode = '^(1\\s?)?';
const dashCheck = '[\\s\\-]?';
const phoneNum = '[0-9]{3}[\\s\\-]?[0-9]{4}$';

const phoneRegEx = new RegExp( `${countCode}${areaCode}${dashCheck}${phoneNum}` );

/* --- END FUNCTIONAL VARIABLES --- */

/* --- EVENT HANDLERS --- */

/**
 * Check Button Handler
 *
 * Handles event of clicking the "Check" button
 */
checkBtn.addEventListener('click', () => {
    verifyNum(inputField.value);
    inputField.value = '';
});

/* --- END EVENT HANDLERS --- */

/* --- INTERFACE FUNCTIONS --- */

/**
 * Form Status Handler
 * 
 * Handles Form Status
 * @function formStatus
 * @param {string} [message=''] - Message to be displayed
 * @param {string} className Class to be used to set class
 */
const formStatus = (message, className) => {
    // Reset class list.
    resultsText.classList.remove(...resultsText.classList);

    if (className === 'empty_error') {
        resultsText.classList.add('empty_error');
        resultsText.innerHTML = "Please enter a Valid Phone Number";
    }
}

/**
 * Verify Number
 * @function verifyNum
 * @param {string} string String of numbers to be verified.
 * @returns {boolean} Simple true or false. 
 */
const verifyNum = (input) => {
    if (inputField.value === "") {
        formStatus('default', 'empty_error'); 
    }
}

/* --- END INTERFACE FUNCTIONS --- */

