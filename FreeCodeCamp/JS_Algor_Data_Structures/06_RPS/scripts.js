/**
 *  Rock Paper Scissors game.
 *  
 *  Rock Paper Scissors game project from the 'JS Algorithms and Data Structures' section of the FCC Curriculum
 */

/* --- INTERFACE VARIABLES --- */

/* --- END INTERFACE VARIABLES --- */

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
