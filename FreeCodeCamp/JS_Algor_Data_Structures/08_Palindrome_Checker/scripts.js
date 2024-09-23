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

    /* --- Function Variables --- */
    const origInput = userInput;
    let resultMessage = "";
    let reversedString = "";
    /* --- End Function Variables --- */

    /* --- Function Logic --- */
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
    const cleanResult = origInput.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

    // Reverse cleaned string.
    reversedString = [...cleanResult].reverse().join('');

    // Check for palindrome:
    if (cleanResult === reversedString) {
        resultMessage = `<p>${origInput} is a palindrome.</p>`;
    } else {
        resultMessage = `<p>${origInput} is not a palindrome.</p>`;
    }
    console.log("Orig: ", origInput);
    console.log("Rev: ", reversedString);
    console.log(resultMessage);
    /* --- End Function Logic --- */
}

/* --- END APP LOGIC  --- */

/* --- EVENT LISTENERS --- */
paliCheckForm.addEventListener("submit", (e) => {
    checkString(userInput.value);
    e.preventDefault();
});
/* --- END EVENT LISTENERS --- */
