/**
 *  Rock Paper Scissors game.
 *  
 *  Rock Paper Scissors game project from the 'JS Algorithms and Data Structures' section of the FCC Curriculum
 */

/* --- INTERFACE VARIABLES --- */
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
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
    const playerResult = hasPlayerWonTheRound(userOption);

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
 *  Show round results message
 *  @function showResults
 *  @param {string} userOption The Players Selection
 *  @returns {string} Round Results Message
 */ 
function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
}
showResults("Rock");
/* --- END GAME LOGIC --- */

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
