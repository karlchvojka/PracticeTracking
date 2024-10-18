/**
 * Decimal to Binary Converter
 *
 * Recursion Project: Lesson 11: JS Algorithms and Data Structures: FCC
 */

/* --- INTERFACE VARIABLES --- */
const animationData = [
    {
        addElDelay: 1000,
        inputVal: 5,
        msg: "decimalToBinary(5) returns '10' + 1 (5 % 2). Then it pops off the stack.",
        showMsgDelay: 15000,
        removeElDelay: 20000
    },
    {
        addElDelay: 1500,
        inputVal: 2,
        msg: "decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 10000,
        removeEmDelay: 15000
    },
    {
        addElDelay: 2000,
        inputVal: 1,
        msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 5000,
        removeElDelay: 10000
    }
];
const animationContainer = document.getElementById("animation-container");
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
        isNaN(inputInt) ||
        inputInt < 0) {

        alert("Please provide a decimal number greater than or equal to 0"      );
        return;
    };
    
    if (inputInt === 5) {
        showAnimation();
        return;
    }

    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
}

/**
 * Show Animation
 * @function showAnimation
 */
const showAnimation = () => {
    result.innerText = "Call Stack Animation";
   
    /* --- @param {array} obj Object array Item --- */ 
    animationData.forEach((obj) => {
        setTimeout(() => {
            animationContainer.innerHTML += `
                <p class="animation-frame" id="${obj.inputVal}">
                    decimalToBinary(${obj.inputVal})
                </p>
            `;
        }, obj.addElDelay);
        setTimeout(() => {document.getElementById(obj.inputVal).textContent = obj.msg;}, obj.showMsgDelay);
        setTimeout(() => {document.getElementById(obj.inputVal).remove();}, obj.removeElDelay);
    });
    setTimeout(() => {}, 20000);
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
});
/* --- END APP LOGIC --- */

