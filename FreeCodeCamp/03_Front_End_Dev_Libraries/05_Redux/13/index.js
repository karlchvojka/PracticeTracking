/**
 * FreeCodeCamp: 05_Redux - 13
 *
 * Write a Counter with Redux
 * Practice writing a simple Redux app.
 */

/* --- ACTION TYPE DECLARATIONS --- */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
/* --- END ACTION TYPE DECLARATIONS --- */

/**
 * Reducer function
 * @param {number} state Initial state
 * @cb Action
 */
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

/* --- ACTION CREATORS --- */
const incAction = () => { return {type: INCREMENT} };
const decAction = () => { return {type: DECREMENT} };
/* --- END ACTION CREATORS --- */

/* --- REDUX STORE DEFINITION --- */
const store = Redux.createStore(counterReducer);
/* --- END REDUX STORE DEFINITION --- */

