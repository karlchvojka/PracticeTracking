/**
 *  Calorie Counter - FCC Project
 *
 *  Calorie Counter project from the 'JS Algorithms and Data Structures section of the FCC Curriculum/
 */

/* --- INTERFACE VARIABLES --- */

const caldorieCounter = document.getElementById('calorie-counter');

// Input Element Variables
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');

// Interactable Element Variables
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');

// Display Element Variables
const output = document.getElementById('output');

/* --- END INTERFACE VARIABLES --*/

/* --- APP DATA --- */
let isError = false;
/* --- END APP DATA --- */

/* --- EVENT LISTENER ATTACHMENTS --- */

addEntryButton.addEventListener("click", addEntry);

/* --- END EVENT LISTENER ATTACMENTS --- */

/* --- GLOBAL FUNCTIONS ---*/

/**
 * Clean Input String
 *
 * Remove +, -, and whitespace variables
 * @function cleanInputString
 * @param {string} str Data from input.
 * @returns {string} sanitized string.
 */
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

/**
 * Is Invalid Input
 *
 * Checks for invalid inputs
 * @function isInvalidInput
 * @param {string} str Data from input
 * @returns {array} Array from the match() return or null.
 */
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

/**
 * Add Entry
 *
 * Adds an entry box to the selected category.
 * @function addEntry
 */
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" type="text" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" type="number" min="0" />`;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

/**
 *  Calculate Calories
 *
 *  Calculates calories from input values
 *  @function calculateCalories
 *  @param {event:event:submit} e - Submit event of Entry form.
 */
function calculateCalories(e) {
    e.preventDefault();
    isError = false;

    // Get inputs from form:
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const exerciseNumberInputs = document.querySelecotrAll('#exercise input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');

    // Pull Calorie numbers from inputs.
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);

    if (isError) {
        return;
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    output.innerHTML = `
        <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
        <hr>
        <p>${budgetCalories} Calories Budgeted</p>
        <p>${consumedCalories} Calories Consumed</p>
        <p>${exerciseCalories} Calories Burned</p>
    `;
}

/**
 * Get Calories from Inputs.
 *
 * Will get calorie amounts from user inputs.
 * @function getCaloriesFromInputs
 * @param {array} list NodeList of Inputs.
 * @returns {} unknown
 */
function getCaloriesFromInputs(list) {
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);

        // If Input is invalid, send the user an alert and return null
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }

        // Else add currVal to calories;
        calories += Number(currVal);
    }
    return calories;
}

/* --- END GLOBAL FUNCTIONS ---*/
