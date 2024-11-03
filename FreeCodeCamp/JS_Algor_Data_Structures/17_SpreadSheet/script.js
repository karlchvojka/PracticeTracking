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
}
/* --- END INTERFACE VARIABILES --- */

/* --- APP DATA --- */
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/* --- END APP LOGIC --- */
