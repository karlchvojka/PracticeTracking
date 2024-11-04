/**
 * Functional Programming SpreadSheet
 *
 * Will build a SpreadSheet as an example of Functional Programming.
 */

/* --- INFIX FUNCTIONS --- */
const infixToFunction = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y
};

const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));

const highPrecedence = (str) => {};
/* --- END INFIX FUNCTIONS --- */

/* --- HELPER FUNCTIONS --- */
    /**
     * Gets average
     * @function average
     * @param {array} nums Array of numbers
     * @returns {number} Average of array.
     */
    const average = (nums) => sum(nums) / nums.length;

    // TODO: Flush out documentation
    /**
     * Eval formula
     * @function evalFormula
     * @param {array} cells The cells
     */
    const evalFormula = (x, cells) => {
        const idToText = (id) => cells.find((cell) => cell.id === id).value;
        const cellRegex = /[A-J][1-9][0-9]?/gi;
        const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
        const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
        const elemValue = (num) => character => idToText(character + num);
        const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
        const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
        const cellExpanded = rangeExpanded.replace(cellRegex, (match) => idToText(match.toUpperCase()));
    };

    /**
     * Checks if number is even
     * @function isEven
     * @param {number} num Number to check
     * @returns {bool} True if even, false if not.
     */
    const isEven = (num) => { return num % 2 === 0 };

    /**
     * Get median value
     * @function median
     * @param {array} nums Array of numbers
     * @return {number} Median value of the array
     */
    const median = (nums) => {
        const sorted = nums.slice().sort((a, b) => a - b);
        const length = sorted.length;
        const middle = length / 2 - 1;
        return isEven(length) ? average([sorted[middle], sorted[middle + 1 ]]) : sorted[Math.ceil(middle)];
    };

    /**
     * Generates a range of numbers
     * @function range
     * @param {number} start Start of range
     * @param {number} end End of range
     * @returns {array} Array built from submitted start and end
     */
    const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

    /**
     * Generate a range from characters
     * @function charRange
     * @param {string} start Starting character
     * @param {string} end Ending character
     * @returns {array} Array built from start and end Params
     */
    const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code) => String.fromCharCode(code));

    // TODO: clean up docs
    /**
     * Sum
     * @function sum
     * @param {array} nums Array of numbers
     * @returns {number} Sum of the array
     */
    const sum = (nums) => nums.reduce((a, b) => a + b, 0);

const spreadsheetFunctions = {
    average,
    median,
    sum,
};
/* --- END HELPER FUNCTIONS --- */

/* --- INTERFACE VARIABLES --- */
/**
 * Windows Onload Event
 */
window.onload = () => {
    const container = document.getElementById('container');

    /**
     * Create Label
     * @function createLabel
     * @param {string} name String of a name
     * @returns {string} HTML for Label element
     */
    const createLabel = (name) => {
        const label = document.createElement('div');
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    };

    // Create Array with range of A -> J,
    // Build label for each
    const letters = charRange("A", "J");
    letters.forEach(() => createLabel());
    
    // Build a range of numbers 1 -> 99
    range(1, 99).forEach((number) => {
        createLabel(number);
        letters.forEach((letter) => {
            // For each create input element
            // Set type, and id.
            const input = document.createElement("input");
            input.type = "text";
            input.id = letter + number;
            input.ariaLabel = letter + number;
            
            // Set input onchange to run update
            input.onchange = update;

            // Append each as child to the container element
            container.appendChild(input);
        });
    });
}
/* --- END INTERFACE VARIABILES --- */

/* --- EVENT HANDLERS --- */
    /**
     * Update event handler
     * @function update
     * @param {object} event Update event object
     */
    const update = (event) => {
        // The element that changed
        const element = event.target;
        const value = element.value.replace(/\s/g, '');
        
        // Check if value is included in the input id.
        if (!value.includes(element.id) && value.charAt(0) === "=") {
        } else {
        }
    };

/* --- END EVENT HANDLERS --- */

/* --- APP DATA --- */
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/* --- END APP LOGIC --- */
