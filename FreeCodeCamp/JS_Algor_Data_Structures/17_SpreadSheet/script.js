/**
 * Functional Programming SpreadSheet
 *
 * Will build a SpreadSheet as an example of Functional Programming.
 */

/* --- INFIX FUNCTIONS --- */
/* Functions to handle Mathematical calculations */
    
    /**
     * Mathematixal infix definitions
     */
    const infixToFunction = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y
    };
    
    /**
     * Evaluate chosen expression
     * @function infixEval
     * @param {string} str Submitted string including mathematic equation
     * @param {string} regex Regex pattern
     * @returns {string} String of mathematic operation with numeric variables
     */
    const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));
    
    /**
     * Figure out order of mathimatic operations
     * @function highPrecedence
     * @param {string} str Submitted string including mathimatic equation
     * @returns {string} evaluated string
     */
    const highPrecedence = (str) => {
        // Pattern to check if num and then a * or / followed by another num.
        const result = /([\d.]+)([*\/])([\d.]+)/;

        // Get full mathematical operation.
        const str2 = infixEval(str, result);
        
        // If str2 equals str return str.
        // Else run highPrecedence Recursively on str2
        return str2 === str ? str : highPrecedence(str2);
    };
/* --- END INFIX FUNCTIONS --- */

/* --- HELPER FUNCTIONS --- */
    /**
     * Gets average
     * @function average
     * @param {array} nums Array of numbers
     * @returns {number} Average of array.
     */
    const average = (nums) => sum(nums) / nums.length;

    /**
     * Parse and evaluate the inputted string
     * @function evalFormula
     * @param {string} x inputted string
     * @param {array} cells Inputted Array. Expected Array of cells.
     */
    const evalFormula = (x, cells) => {
        /* --- LOCAL VARIABLES --- */

        // Regex Pattern to find cell IDs (eg: A32)
        const cellRegex = /[A-J][1-9][0-9]?/gi;

        // Regex pattern to find Cell Ranges (eg: A32:B45)
        const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
        /* --- END LOCAL VARIABLES --- */
        
        /**
         * Find value of a cell
         * @function idToText
         * @param {string} id ID of cell
         * @returns {string} Value of cell.
         */
        const idToText = (id) => cells.find((cell) => cell.id === id).value;

        /**
         * Generate range from submitted string
         * @function rangeFromString
         * @param {number} num1 Number to start range
         * @param {number} num2 Number to End range
         * @returns {array} Generated Array
         */
        const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
        
        // idToText returns the value from the cell
        const elemValue = (num) => character => idToText(character + num);
        
        // Returns an array of function references
        // each calls elemVal with num as a param
        // each of which returns the value of each called cell id  
        const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
        const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
        
        // Get value of submitted cell by id.
        const cellExpanded = rangeExpanded.replace(cellRegex, (match) => idToText(match.toUpperCase()));
        
        // Getting solution of submitted operation, per cell value.
        const functionExpanded = applyFunction(cellExpanded);
        
        // If functionExpanded is equal to x
        // Yes: return the value.
        // No: recursively call evalForumal on the string. 
        return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded, cells);
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
        // Sort submitted array
        const sorted = nums.slice().sort((a, b) => a - b);

        // Get array length
        const length = sorted.length;

        // Find middle index
        const middle = length / 2 - 1;

        // If length is an even number:
        // Return average of the middle num and next one
        // Else return middle num rounded up 
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
     * Generate a range from submitted characters
     * @function charRange
     * @param {string} start Starting character
     * @param {string} end Ending character
     * @returns {array} Array built from start and end Params
     */
    const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code) => String.fromCharCode(code));

    /**
     * Sum
     * @function sum
     * @param {array} nums Array of numbers
     * @returns {number} Sum of the array
     */
    const sum = (nums) => nums.reduce((a, b) => a + b, 0);

/**
 * Common SpreadSheet functions.
 */
const spreadsheetFunctions = {
    '': arg => arg,
    average,
    even: nums => nums.filter(isEven),
    everyeven: nums => nums.every(isEven),
    firsttwo: nums => nums.slice(0, 2),
    has2: nums => nums.includes(2),
    increment: nums => nums.map((num) => num + 1),
    lasttwo: nums => nums.slice(-2),
    median,
    nodupes: nums => [...new Set(nums)],
    random: ([x, y]) => Math.floor(Math.random() * y + x),
    range: nums => range(...nums),
    someeven: nums => nums.some((num) => isEven(num)),
    sum,
};

/**
 * spreadsheetFunctions parser.
 * @function applyFunction
 * @param {string} str String representing cell value(s) to be used
 * @return 
 */
const applyFunction = (str) => {
    /* --- LOCAL VARIABLES --- */
    // Parse/Evaluate multiplication and division operations.
    const noHigh = highPrecedence(str);

    // Regex Pattern Addition and Subtraction operations.
    const infix = /([\d.]+)([+-])([\d.]+)/;

    // Returns Addition or Subtraction operations as strings.
    const str2 = infixEval(noHigh, infix);

    // Regex Pattern matching spreadsheetFunction calls
    const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
    /* --- END LOCAL VARIABLES --- */

    /**
     * Split string of numbers into an Array of numbers
     * @function toNumberList
     * @param {string} args String of comma seperated numbers
     * @returns {array} Array of numbers
     */
    const toNumberList = args => args.split(",").map(parseFloat);

    /**
     * Core apply function
     * @function apply
     * @param {string} fn Name of the function to be called
     * @param {string} args Arguments to be passed to selected function
     * @returns {number|string|array} returned value from SpreadSheet function.
     */
    const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));

    // If spreadsheetFunctions contains a property that matches fn (the function/operation name:
    // Return the result of calling the function with the submitted arguments.
    return str2.replace(functionCall, (match, fn, args) => spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match);
};
/* --- END HELPER FUNCTIONS --- */

/* --- INTERFACE VARIABLES --- */
/**
 * Windows Onload Event
 */
window.onload = () => {
    // Get container element
    const container = document.getElementById('container');

    /**
     * Create Label for cols and rows
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
    // Use range and labels to assign IDs for each input
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
        
        // The new submitted value
        const value = element.value.replace(/\s/g, '');
        
        // Check if value is included in the input id and if the first value is '='.
        // If yes, set value to the result of evalFormula
        if (!value.includes(element.id) && value.charAt(0) === "=") {
            element.value = evalFormula(value.substring(1), Array.from(document.getElementById('container').children));
        }
    };

/* --- END EVENT HANDLERS --- */
