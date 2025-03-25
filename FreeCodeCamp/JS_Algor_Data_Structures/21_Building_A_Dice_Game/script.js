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

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = `, score = ${score}`;
};

const updateScore = (selectedValue, id) => {
    score += parseInt(selectedValue);
    totalScoreElement.textContent = score;
    scoreHistory.innerHTML += `<li>${id} : ${selectedValue}</li>`;
}

const getHighestDuplicates = (numArr) => {
    const counts = {};
    let totalScore = 0;

    numArr.forEach((number) => {
        counts[number] = (counts[number] || 0) + 1;
        totalScore += number;
    });

    const maxCount = Math.max(...Object.values(counts));

    if (maxCount >= 4) {
        updateRadioOption(1, totalScore);
        updateRadioOption(0, totalScore);
    } else if(maxCount >= 3) {
        updateRadioOption(0, totalScore);
    } else {
        updateRadioOption(5, 0);
    }
};

const detectFullHouse = (diceValuesArr) => {
    let value = {};
    for(dice of diceValuesArr) {
        if(value[dice]) {
            value[dice] += 1;
        } else {
            value[dice] = 1;
        }
    }

    const checkArr = [...Object.values(value)];
    if(checkArr.includes((2 & 3))) {
        updateRadioOption(2, 25);
    }
    updateRadioOption(5, 0);
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

const resetGame = () => {
    listOfAllDice.forEach(element => element.textContent = 0);

    score = 0;
    rolls = 0;
    round = 1;
    totalScoreElement.textContent = score;
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
    resetRadioOptions();
};

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("Maximum Rolls Reached - Select a score");
    } else {
        rolls++;
        resetRadioOptions();
        rollDice();
        updateStats();
        getHighestDuplicates(diceValuesArr);
        detectFullHouse(diceValuesArr);
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

keepScoreBtn.addEventListener("click", () => {
    let selectedValue;
    let achieved;

    for(const radioButton of scoreInputs) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            achieved = radioButton.id;
            break;
        }
    }
    if(selectedValue) {
        rolls = 0;
        round++;
        updateStats();
        resetRadioOptions();
        updateScore(selectedValue, achieved);

        if(round === 6) {
            setTimeout(() => {
                alert(`Game Over! Your final score: ${score}`)
                resetGame();
            }, 500)
        }
    } else {
        alert("Please select an option or roll the dice.");
    }
});
