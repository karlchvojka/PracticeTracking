/**
 * Functional Programming SpreadSheet
 *
 * Will build a SpreadSheet as an example of Functional Programming.
 */

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

    /**
     * Generates a range of numbers
     * @function range
     * @param {number} start Start of range
     * @param {number} end End of range
     * @returns {array} Array built from submitted start and end
     */
    const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

    // TODO: flush out comment docs
    /**
     * Generate a range from characters
     * @function charRange
     * @param {string} start Starting character
     * @param {string} end Ending character
     * @returns {array} Array built from start and end Params
     */
    const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code) => String.fromCharCode(code));

    const letters = charRange("A", "J");
}
/* --- END INTERFACE VARIABILES --- */

/* --- APP DATA --- */
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/* --- END APP LOGIC --- */
