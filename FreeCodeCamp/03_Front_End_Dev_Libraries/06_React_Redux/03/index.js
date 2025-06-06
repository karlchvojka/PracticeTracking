/**
 * FreeCodeCamp: 06_React_Redux - 03
 * 
 * Extracting State Logic to Redux
 */

/* --- ACTION DEFINITIONS --- */
const ADD = 'ADD';
/* --- END ACTION DEFINITIONS --- */

/* --- DEFAULT STATE --- */
const messages = [];
/* --- END DEFAULT STATE --- */

/**
 * Messages Reducer
 * 
 * A Reducer function to handle interactions with state
 * 
 * @param {array} messages Initial state
 * @cb Action callback
 * @returns {array} New state
 */
const messageReducer = (state = messages, action) => {
    switch(action.type) {
        case ADD:
            return state.concat(action.message)
        default:
            return state;
    }
}

/**
 * Add Message Action creator
 * @param {string} message Message to be addedd
 */
const addmessage = (message) => {
    return {
        type: ADD,
        message
    }
}

const store = Redux.createStore(messageReducer);