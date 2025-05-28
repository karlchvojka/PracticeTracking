/**
 * FreeCodeCamp: Redux Lesson - 02
 *
 * Get State from the Redux Store
 */

const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState();
