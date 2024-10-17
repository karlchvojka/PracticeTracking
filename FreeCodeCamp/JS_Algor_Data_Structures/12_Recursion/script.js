/**
 * Decimal to Binary Converter
 *
 * Recursion Project: Lesson 11: JS Algorithms and Data Structures: FCC
 */

/* --- INTERFACE VARIABLES --- */
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number-input");
const result = document.getElementById("result");
/* --- END INTERFACE VARIABLES --- */

/* --- APP LOGIC --- */
/**
 * Decimal To Binary
 * @function decimalToBinary
 * @param {string} input Input entry from Input Field.
 *
 */
const decimalToBinary = (input) => {
}

/**
 * Check User Input.
 * @function checkUserInput
 */
const checkUserInput = () => {
    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0) {

        alert("Please provide a decimal number greater than or equal to 0");
        return;
    };
    console.log(numberInput.value);
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
});
/* --- END APP LOGIC --- */

