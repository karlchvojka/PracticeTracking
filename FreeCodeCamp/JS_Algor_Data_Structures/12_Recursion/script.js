/**
 * Decimal to Binary Converter
 *
 * Recursion Project: Lesson 11: JS Algorithms and Data Structures: FCC
 */

/* --- INTERFACE VARIABLES --- */
const animationData = [
    {
        addElDelay: 1000,
        inputVal: 5
    },
    {
        addElDelay: 1500,
        inputVal: 2
    },
    {
        addElDelay: 2000,
        inputVal: 1
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
    });
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
});
/* --- END APP LOGIC --- */

