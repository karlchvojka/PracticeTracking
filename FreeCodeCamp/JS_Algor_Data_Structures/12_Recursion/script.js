/**
 * Decimal to Binary Converter
 *
 * Recursion Project: Lesson 11: JS Algorithms and Data Structures: FCC
 */

/* --- INTERFACE VARIABLES --- */
const callStack = [];
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number-input");
const result = document.getElementById("result");
/* --- END INTERFACE VARIABLES --- */

/* --- APP LOGIC --- */
/** Decimal To Binary
 * @function decimalToBinary
 * @param {string} input Input entry from Input Field.
 */
const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
}

/**
 * Check User Input.
 * @function checkUserInput
 */
const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    
    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0) {

        alert("Please provide a decimal number greater than or equal to 0"      );
        return;
    };
    
    if (parseInt(numberInput.value) === 5) {
        showAnimation();
        return;
    }

    result.textContent = decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
}

/**
 * Show Animation
 * @function showAnimation
 */
const showAnimation = () => {}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
});
/* --- END APP LOGIC --- */

