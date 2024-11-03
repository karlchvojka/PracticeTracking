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
    
    // TODO: Flush out param and returns docs
    /**
     * Create Label
     * @function createLabel
     * @param {string} name String of a name
     * @returns {string} Label
     */
    const createLabel = (name) => {
        const label = document.createElement('div');
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    };

    // TODO: Flush out Function documentation
    /**
     * Generates a range of numbers
     * @function range
     * @param {number} start Start of range
     * @param {number} end End of range
     * @returns {string} Returned range
     */
    const range = (start, end) => Array(end - start + 1).fill(start);
}
/* --- END INTERFACE VARIABILES --- */

/* --- APP DATA --- */
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/* --- END APP LOGIC --- */
