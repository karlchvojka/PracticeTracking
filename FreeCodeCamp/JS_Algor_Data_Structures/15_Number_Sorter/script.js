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
            if (array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

/**
 * Insertion Sort
 * @function insertionSort
 * @param {array} array Numbers array to be sorted
 */
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;
    while (j >= 0 && array[j] > currValue) {
        array[j + 1] = array[j];
        j--;
    }
    }
}
/**
 * Selection Sort
 * @function selectionSort
 * @param {array} array Numbers array to be sorted
 */
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}
/**
 * Sort numbers inputed
 * @function sortInputArray
 * @param {event} event Sort button click
 */
const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
    const sortedValues = insertionSort(inputValues);
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
