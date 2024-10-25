/**
 * Number Sorter
 *
 * Algorithmic Thinking via building a number sorter.
 */

/* --- INTERFACE VARIABLES --- */
const sortButton = document.getElementById("sort");
/* --- END INTERFACE VARIABLES --- */

/* --- APP DATA --- */
/* --- END APP DATA --- */

/* --- APP LOGIC --- */
/**
 * Handle sorting numbers array
 * @function bubbleSort
 * @param {array} array Numbers array to be sorted
 */
const bubbleSort = (array) => {
    for (let i=0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            console.log(array, array[j], array[j+1]);
            if (array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
/**
 * Sort numbers inputed
 * @function sortInputArray
 * @param {event} event Sort button click
 */
const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
    const sortedValues = bubbleSort(inputValues);
    updateUI(sortedValues);
}

/**
 * Update Ui with Sorted numbers
 * @function updateUI
 * @param {array} array Array of numbers.
 */
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};
/* --- END APP LOGIC --- */

/* --- EVENT LISTENERS --- */
sortButton.addEventListener("click", sortInputArray);
/* --- END EVENT LISTENERS --- */
