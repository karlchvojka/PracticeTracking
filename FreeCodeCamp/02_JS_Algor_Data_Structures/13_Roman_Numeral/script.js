/**
 * Roman Numeral Converter
 *
 * Recursion Project: Lesson 12: JS Algorithms and Data Structures: FCC
 */

/* --- INTERFACE VARIABLES --- */
const form = document.getElementById("romanConversionForm");
const output = document.getElementById("output");
const romanInput = form.querySelector('#number');
/* --- END INTERFACE VARIABLES --- */

/* --- APP DATA --- */
const romanNumerals = [
    { val: 1000, sym: 'M' },
    { val: 900, sym: 'CM' },
    { val: 500, sym: 'D' },
    { val: 400, sym: 'CD' },
    { val: 100, sym: 'C' },
    { val: 90, sym: 'XC' },
    { val: 50, sym: 'L' },
    { val: 40, sym: 'XL' },
    { val: 10, sym: 'X' },
    { val: 9, sym: 'IX' },
    { val: 5, sym: 'V' },
    { val: 4, sym: 'IV' },
    { val: 1, sym: 'I' },
];
/* --- END APP DATA --- */

/* --- EVENT LISTENERS --- */

form.addEventListener('submit', (e) => {
    e.preventDefault();
    output.innerHTML = `<p>${digitToRoman(romanInput.value)}</p>`;
});

/** --- END EVENT LISTENERS --- */

/** --- APP LOGIC --- */
/**
 * Convert Recursive
 *
 * Takes entered string and converts it to Roman Numeral recursively
 * @function
 * @param {string} num The string entered into the form.
 */
const recursiveConvert = (num) => {
    if (num === 0) return '';
    for (const item of romanNumerals) {
        if (num >= item.val) {
            return item.sym + recursiveConvert(num - item.val);
        }
    };
};

/**
 * String to Roman Numeral
 *
 * Handles error handling and calling recursiveConvert function
 * @function digitToRoman
 * @param {string} num Entered variable.
 */
const digitToRoman = (num) => {
    if (num === '') {
        return 'Please enter a valid number';
    } else if (isNaN(num)) {
        return 'Please enter a valid number';
    } else if (num <= 0) {
        return 'Please enter a number greater than or equal to 1';
    } else if (num > 3999) {
        return 'Please enter a number less than or equal to 3999';
    } else {
        return recursiveConvert(num);
    }
};
/** --- END APP LOGIC --- */
