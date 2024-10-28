/**
 * Statistics Calculator
 *
 * Will take a set of numbers and returns the mean, median, mode, standard deviation, and variance.
 */

/* --- INTERFACE VARIABLES --- */
/* --- END INTERFACE VARIABLES --- */

/* --- APP DATA --- */
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/**
 * Handles submitted numbers
 * @function calculate
 */
const calculate = () => {
    /* --- INTERFACE VARIABLES --- */
    /** 
     * A String of numbers entered by the user
     * @type {string}
     */
    const value = document.querySelector("#numbers").value;
    
    /**
     * Split value string into an array.
     * @type {string[]}
     */
    const array = value.split(/,\s*/g);
    
    /**
     * Convert array into an array of numbers
     * @type {number[]}
     */
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    /* --- END INTERFACE VARIABLES --- */
};

/**
 * Get Mean of submitted array
 * @function getMean
 * @param {array} array Array of numbers submitted by user
 */
const getMean = (array) => {};
/* --- END APP LOGIC --- */
