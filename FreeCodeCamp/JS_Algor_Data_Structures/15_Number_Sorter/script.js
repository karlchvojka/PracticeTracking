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
 * Sort numbers inputed
 * @function sortInputArray
 * @param {event} event Sort button click
 */
const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")];
}
/* --- END APP LOGIC --- */

/* --- EVENT LISTENERS --- */
sortButton.addEventListener("click", sortInputArray);
/* --- END EVENT LISTENERS --- */
