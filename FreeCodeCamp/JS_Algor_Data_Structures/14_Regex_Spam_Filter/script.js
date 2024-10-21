/**
 * Spam Filter
 *
 * Regex Project: Learn Regex by building a spam filter.
 */

/* --- INTERFACE VARIABLES --- */
const checkMessageButton = document.getElementById('check-message-btn')
const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
/* --- END INTERFACE VARIABLES --- */

/* --- APP DATA --- */
const helpRegex = /please help|assist me/i;
const denyList = [
    helpRegex
];
const dollarRegex = /dollars/i;
/* --- END APP DATA --- */

/* --- EVENT LISTENERS --- */

/**
 * Check Message Click Event.
 *
 * @fires Click click event
 */
checkMessageButton.addEventListener("click", () => {
    if (messageInput.value === '') {
        alert('Please enter a message.');
        return;
    }

    result.textContent = isSpam(messageInput.value)
        ? "Oh no! This looks like a spam message."
        : "This message does not seem to contain any spam.";
    messageInput.value = "";
});
/* --- END EVENT LISTENERS --- */

/* --- APP LOGIC --- */

/**
 * Check if message is spam.
 * @function isSpam
 * @param {string} msg Input from web form.
 */
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
/* --- END APP LOGIC --- */
