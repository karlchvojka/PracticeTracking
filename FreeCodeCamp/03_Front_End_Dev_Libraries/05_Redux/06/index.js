/**
 * FreeCodeCamp: Redux - Lesson 06
 *
 * Handle an Action in the Store
 */

/**
 * Define Default State.
 */
const defaultState = {
  login: false
};

/**
 * Redux store reducer function.
 * Responsible for the state modifications that take place in response to the actions.
 * @callback loginAction-Action Definition
 * @param {object} defaultState Default Redux Store State.
 */
const reducer = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return {
      login: true
    };
  } else {
    return state;
  }
};

/**
 * Define Redux Store.
 */
const store = Redux.createStore(reducer);

/**
 * Action Definition function.
 * @returns {Object} Action Definitions.
 */
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

