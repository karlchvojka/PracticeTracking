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
 * Check User Input.
 * @function
 */
const checkUserInput = () => {
    console.log(numberInput.value);
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
});
/* --- END APP LOGIC --- */

