/**
 * FreeCodeCamp: Redux Lesson - 02
 *
 * Get State from the Redux Store
 */

/**
 * Redux Store Creation Function
 * NOTE: In this case we are creating the initial state value for the store and passing it in while we create the store. We are then declaring the currentState value, and getting the state from the store with the getState method.
 */
const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState();
