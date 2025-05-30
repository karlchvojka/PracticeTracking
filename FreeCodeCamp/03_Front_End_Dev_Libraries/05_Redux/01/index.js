/**
 * FreeCodeCamp: 05_Redux - 01
 *
 * Create a Redux store.
 */

/**
 * Reducer function
 * NOTE: State param is usually an OBJ to handle mulitple values as INITIAL state.
 * As this is a n example, we are passing a single value and so its a number.
 * @param {number} state - Initial state
 */
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);

