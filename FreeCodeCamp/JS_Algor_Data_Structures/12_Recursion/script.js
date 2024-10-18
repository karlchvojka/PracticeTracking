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
/**
 * CountDownAndUp
 * @function countDownAndUp
 * @param {num} number Amount to count down
 */
const countDownAndUp = (number) => {
    console.log(number);
    if (number === 0) {
        console.log("Reached base case");
        return;
    } else {
        countDownAndUp(number - 1);
        console.log(number);
    }
}
/**
 * Decimal To Binary
 * @function decimalToBinary
 * @param {string} input Input entry from Input Field.
 */
const decimalToBinary = (input) => {
    let binary = "";
    if (input === 0) {
        binary = "0";
    }
    while (input > 0) {
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    }
    result.innerText = binary;
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
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
});

countdown(3);
/* --- END APP LOGIC --- */

