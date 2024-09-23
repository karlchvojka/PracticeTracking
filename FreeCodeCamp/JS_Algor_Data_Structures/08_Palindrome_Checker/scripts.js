/**
 * Palindrome Checker Application.
 *
 * Application that checks if entered string of text is a palinrome or not.
 */

/* --- INTERFACE VARIABLES --- */
const paliCheckForm = document.getElementById("palindrome-check-form");
const userInput = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
/* --- END INTERFACE VARIABLES --- */

/* --- APP LOGIC --- */

/**
 * Check String
 *
 * Checks the submitted string to see if its a palintrome.
 * @function checkString
 * @param {event} event Form Submit Event.
 */
const checkString = (input) => {
    console.log("Function Test");
    console.log(input);
}

/* --- END APP LOGIC  --- */

/* --- EVENT LISTENERS --- */
paliCheckForm.addEventListener("submit", (event) => {
    checkString(userInput.value);
    event.preventDefault();
});
/* --- END EVENT LISTENERS --- */
