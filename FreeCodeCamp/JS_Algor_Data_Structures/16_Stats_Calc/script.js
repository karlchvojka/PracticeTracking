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

    /**
     * For each element in the array:
     * - If the element exists, add one to the count object
     * - Else, create new one with element as key, set value to 1.
     */
    array.forEach((el) => {
        if(counts[el]) {
            counts[el] += 1;
        } else {
            counts[el] = 1;
        }
    });
    
    /**
     * If Every value appears the same number of times, return null.
     */
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    } 

    /**
     * Find value that appears with highest frequency.
     */
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    
    /**
     * Find if mode is multiple numbers with the same frequency, or a single number.
     */
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    
    /**
     * Return mode as string with elements separated by a space.
     */
    return mode.join(', ');
};

/**
 * Get Range of Submitted Array
 * @function getRange
 * @param {array} array Array of numbers submitted by users.
 * @returns {number} Range of values.
 */
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
}

/**
 * Get Variance of Submitted Array
 * @function getVariance
 * @param {array} array Array of numbers submitted by user.
 */
const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
};

/**
 * Get standard deviation
 * @function getStandardDeviation
 * @param {array} array Array of the numbers submitted by user.
 */
const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    const standardDeviation = Math.sqrt(variance);
}

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
     * Get Mode value
     */
    const mode = getMode(numbers);

    /**
     * Get Range value
     */
    const range = getRange(numbers);

    /**
     * Get Variance value
     */
    const variance = getVariance(numbers);

    /**
     * Set values to display elements
     */
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("variance").textContent = variance;
};


/* --- END APP LOGIC --- */
