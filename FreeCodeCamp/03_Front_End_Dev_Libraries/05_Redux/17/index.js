/**
 * FreeCodeCamp: 05_Redux - 17
 * 
 * Copy an Object with Object.assign
 * 
 * Use Object.assign to create a new state object where status is the string online
 */

/* --- EXAMPLE STATE --- */
const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};
/* --- END EXAMPLE STATE --- */

/**
 * Immutable Reducer
 * 
 * An Example of a reducer function, with immutable state
 * 
 * @param {array} defaultState Example default state
 * @cb Action callback
 * @returns {object} New state 
 */
const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ONLINE':
            return Object.assign({}, state, {status: 'online'})
        default:
            return state;
    }
};

/**
 * Wakeup Action Creator
 * 
 * Changes state 'status' value from 'offline' to 'online
 */
const wakeUp = () => {
    return {
        type: 'ONLINE',
    }
}

/* --- REDUX STORE DEFINITION --- */
const store = Redux.createStore(immutableReducer);
/* --- END REDUX STORE DEFINITION --- */