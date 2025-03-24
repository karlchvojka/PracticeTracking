const listOfAllDice = document.querySelectorAll('.die');
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');
const roundElement = document.querySelector('#current-round');
const rollsElement = document.querySelector('#current-round-rolls');
const totalScoreElement = document.querySelector('#total-score');
const scoreHistory = document.querySelector('#score-history');
const rollDiceBtn = document.querySelector('#roll-dice-btn');
const keepScoreBtn = document.querySelector('#keep-score-btn');
const rulesBtn = document.querySelector('#rules-btn');

const rulesContainer = document.querySelector(".rulesContainer");

let isModalShowing = false;
let diceValuesArr = [];

let rolls = 0;
let score = 0;
let total = 0;
let round = 1;

rollDiceBtn.addEventListener("click", () => {
    const randomNum = () => Math.floor(Math.random()*6 + 1);

    for (let i = 0; i < 5; i++) {
        diceValuesArr[i] = randomNum();
        listOfAllDice[i].textContent = `${diceValuesArr[i]}`;
    }
});


rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesBtn.textContent = "Hide rules";
        rulesContainer.style.display = "block";
    } else {
        rulesBtn.textContent = "Show rules";
        rulesContainer.style.display = "none";
    }
});
