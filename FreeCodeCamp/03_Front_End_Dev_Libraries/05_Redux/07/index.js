/**
 * FreeCodeCamp - Redux - Lesson 07
 *
 * Dispatch an Action Event
 */

/**
 * Define Store and initial state.
 */
const store = Redux.createStore(
  (state = {login: false}) => state
);

/**
 * Login Action
 * Define login action
 * @return {Object}
 */
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

/**
 * Dispatch action to store.
 */
store.dispatch(loginAction());
