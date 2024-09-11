const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];

/**
 * Get random index
 *
 * Returns random index from darkColorsArr
 * @function getRandomIndex
 * @returns {number}
 */
function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

/**
 * Change backgroud color
 *
 * Handles changing the background color and display text
 * @function changeBackgroundColor
 */
function changeBackgroundColor() {
    // Set common use variable
    const color = darkColorsArr[getRandomIndex()];

    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");
console.log(btn);
