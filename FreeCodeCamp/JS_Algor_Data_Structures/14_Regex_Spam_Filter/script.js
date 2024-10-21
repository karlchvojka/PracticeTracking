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
/* --- END APP DATA --- */

/* --- EVENT LISTENERS --- */
checkMessageButton.addEventListener("click", () => {
    if (messageInput.value === '') {
        alert('Please enter a message.');
        return;
    }
});
/* --- END EVENT LISTENERS --- */

/* --- APP LOGIC --- */
/* --- END APP LOGIC --- */
