/**
 * Functional Programming SpreadSheet
 *
 * Will build a SpreadSheet as an example of Functional Programming.
 */

/* --- HELPER FUNCTIONS --- */
    /**
     * Gets average
     * @function average
     * @param {array} nums Array of numbers
     * @returns {number} Average of array.
     */
    const average = (nums) => sum(nums) / nums.length;

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

            // Append each as child to the container element
            container.appendChild(input);
        });
    });
}
/* --- END INTERFACE VARIABILES --- */

/* --- APP DATA --- */
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/* --- END APP LOGIC --- */
