/**
 * FreeCodeCamp: Redux - Lesson 05
 *
 * Dispatch an Action Event
 */

/**
 * Create Redux Store Object.
 * Define initial state with the key login and value false.
 */
const store = Redux.createStore(
  (state = {login: false}) => state
);

/**
 * Define Login Action and return the type 'LOGIN'
 */
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

/**
 * Dispatch LOGIN action, to the store, pass login action function.
 */
store.dispatch(loginAction());
