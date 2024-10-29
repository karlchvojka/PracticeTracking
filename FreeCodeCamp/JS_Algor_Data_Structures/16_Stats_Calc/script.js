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
 * Get Mean of submitted array
 * @function getMean
 * @param {array} array Array of numbers submitted by user
 * @returns {number} Mean of submitted array
 */
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];

const isEven = testArr2.length % 2 === 0;
console.log(isEven);

/**
 * Get Median of submitted array
 * @function getMedian
 * @param {array} array Array of numbers submitted by user
 */
const getMedian = (array) => {
    /**
     * Sort array fron least to greatest
     * @type {number[]}
     */
    const sorted = array.sort((a, b) => {return a - b;});
};

/**
 * Handles submitted numbers
 * @function calculate
 */
const calculate = () => {
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
    
    /**
     * Get the mean value
     */
    const mean = getMean(numbers);

    /**
     * Display the mean value.
     */
    document.querySelector("#mean").textContent = mean;
};


/* --- END APP LOGIC --- */
