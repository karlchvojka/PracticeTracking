/**
 * Palindrome Checker Application.
 *
 * Application that checks if entered string of text is a palinrome or not.
 */

/* --- INTERFACE VARIABLES --- */
const paliCheckForm = document.getElementById("palindrome-check-form");
const result = document.getElementById("result");
const submitButton = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
/* --- END INTERFACE VARIABLES --- */

/* --- APP LOGIC --- */

/**
 * Check String
 *
 * Checks the submitted string to see if its a palintrome.
 * @function checkString
 * @param {string} userEvent Text passed into the form.
 */
const checkString = (userInput) => {
    /*
     * Check if userInput is empty.
     * If so, show an alert and end function
     */
    if (userInput === "") {
        alert("Please input a value");
        return
    }

    // Empty results div
    result.replaceChildren();

    // Sanitize string by removing non-alphanumeric and making string lowercase
    const cleanResult = userInput.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    console.log("Sanitized: ", cleanResult);
}

/* --- END APP LOGIC  --- */

/* --- EVENT LISTENERS --- */
paliCheckForm.addEventListener("submit", (e) => {
    checkString(userInput.value);
    e.preventDefault();
});
/* --- END EVENT LISTENERS --- */
