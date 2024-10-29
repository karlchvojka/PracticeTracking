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
    
    if (sorted.length % 2 === 0) {
        return getMean(sorted);
    } else {
        return sorted[Math.floor(sorted.length / 2)];
    }
};

/**
 * Get Mode of submitted array
 * @function getMode
 * @param {array} array Array of numbers submitted by user.
 */
const getMode = (array) => {
    /**
     * Keeps track of counts
     */
    const counts = {};
    
    return array;
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
     * Get Median Value
     */
    const median = getMedian(numbers);

    /**
     * Display the mean value.
     */
    document.querySelector("#mean").textContent = mean;

    /**
     * Display Median value
     */
    document.querySelector("#median").textContent = median;
};


/* --- END APP LOGIC --- */
