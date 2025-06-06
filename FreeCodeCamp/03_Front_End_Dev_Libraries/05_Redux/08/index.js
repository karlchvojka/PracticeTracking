/**
 * FreeCodeCamp: Redux: Lesson 08
 *
 * Use const for Action Types
 */

/* ACTION DECLARATIONS */
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
/* END ACTION DECLARATIONS */

/* DEFAULT STATE DELCARATIONS */
const defaultState = {
  authenticated: false
};
/* END DEFAULT STATE DELCARATIONS */

/**
 * Redux Reducer Function
 * @param {Object} defaultState Default State
 * @param {cb} action Action definition
 */
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

/**
 * Redux Store declaration
 *
 * Creates the store, and ties in the reducer function.
 */
const store = Redux.createStore(authReducer);

/**
 * Action Definitions
 */
const loginUser = () => {
  return {
    type: LOGIN
  }
}

const logoutUser = () => {
  return {
    type: LOGOUT
  }
}
