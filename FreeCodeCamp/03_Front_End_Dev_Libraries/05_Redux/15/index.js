/**
 * FreeCodeCamp: 05_Redux - 15
 * 
 * Use the Spread Operator on Arrays
 * 
 * Use the spread operator to return a new copy of state when a to-do is added.
 */

/**
 * Immutable Reducer
 * 
 * A Reducer function with immutable state
 * 
 * @param {array} state Array of strings
 * @cb Action callback
 * @returns {array} New state
 */
const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
        case 'ADD_TO_DO':
            return [...state, action.todo]
        default:
            return state;
    }
};

/**
 * Add To do Action creator
 * @param {string} todo Todo to be added
 */
const addTodo = (todo) => {
    return {
        type: ADD_TO_DO,
        todo
    }
}

/** REDUX STORE DECLARATION */
const store = Redux.createStore(immutableReducer);