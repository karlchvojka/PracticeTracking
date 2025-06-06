/**
 * FreeCodeCamp: 05_Redux - 16
 * 
 * Remove an Item from an Array
 * 
 * Using slice and concat to remove a item from the state
 */

/**
 * Example Redux Reducer function
 * 
 * A example Reducer function for working with a Redux store.
 * 
 * @param {array} state Array of numbers
 * @cb Action Callback
 * @returns {array} New State 
 */
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
        case 'REMOVE_ITEM':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1, state.length)
            ];
        default:
            return state;
    }
};

/**
 * Remove item Action Creator
 * @param {number} index Index to be removed
 */
const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index
    }
}

/* --- REDUX STORE DEFINITION --- */
const store = Redux.createStore(immutableReducer);
/* --- END REDUX STORE DEFINITION --- */