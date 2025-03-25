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

const rollDice = () => {
    diceValuesArr = [];
    
    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomDice);
    }

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index]
    });
};

const updateStats = () => {
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
};

const updateRadioOptions = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (numArr) => {
    const counts = {};
    let totalScore = 0;

    numArr.forEach((number) => {
        counts[number] = (counts[number] || 0) + 1;
        totalScore += number;
    });

    const maxCount = Math.max(...Object.values(counts));

    if (maxCount >= 4) {
        updateRadioOptions(1, totalScore);
        updateRadioOptions(0, totalScore);
    } else if(maxCount >= 3) {
        updateRadioOptions(0, totalScore);
    } else {
        updateRadioOptions(5, 0);
    }
};

const resetRadioOptions = () => {
    scoreInputs.forEach((e) => {
        e.disabled = true;
        e.checked = false;
    })
    scoreSpans.forEach((e) => {
        e.textContent = "";
    })
}

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("Maximum Rolls Reached - Select a score");
    } else {
        rolls++;
        rollDice();
        updateStats();
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
