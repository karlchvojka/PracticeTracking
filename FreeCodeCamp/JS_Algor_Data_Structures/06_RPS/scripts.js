/**
 *  Rock Paper Scissors game.
 *  
 *  Rock Paper Scissors game project from the 'JS Algorithms and Data Structures' section of the FCC Curriculum
 */

/* --- INTERFACE VARIABLES --- */
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
/* --- END INTERFACE VARIABLES --- */

/* --- APP DATA --- */
let playerScore = 0;
let computerScore = 0;
/* --- END APP DATA --- */

/* --- GAME LOGIC --- */
/**
 * Has Player won the round.
 *
 * Check if player has won the round.
 * @function hasPlayerWonTheRound
 * @param {string} player The Players selection
 * @param {string} computer The Computers option
 * @returns {boolean} Round result
 */
function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

/**
 * Get Round Results
 *
 * Get the results of the round.
 * @function getRoundResults
 * @param {string} userOption The Players selection
 * @returns {string} String with a message and result
 */
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    const playerResult = hasPlayerWonTheRound(userOption, computerResult);

    if (playerResult) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
       return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

/**
 *  Show Results
 *
 *  Show round results message and hide/show elements appropriately
 *  @function showResults
 *  @param {string} userOption The Players Selection
 *  @returns {string} Round Results Message
 */ 
function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;

    if(playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;
        
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
}

/**
 * Reset the Game
 *
 * Resets the game and the interface.
 * @function resetGame
 * @returns
 */
function resetGame() {
    computerScore = 0;
    playerScore = 0;
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}
/* --- END GAME LOGIC --- */

/* --- EVENT LISTENERS --- */
resetGameBtn.addEventListener('click', resetGame);

rockBtn.addEventListener('click', function() {
    showResults("Rock");
});

paperBtn.addEventListener('click', function() {
    showResults("Paper");
});

scissorsBtn.addEventListener('click', function() {
    showResults("Scissors"); 
});
/* --- END EVENT LISTENERS --- */

/* --- COMPUTER PLAYER FUNCTIONS --- */

/**
 * Get Random Computer Result
 *
 * Chooses the Computer player's option for current round
 * @function getRandomComputerResult
 * @returns {string} Computer option.
 */
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

/* --- END COMPUTER PLAYER FUNCTIONS --- */
