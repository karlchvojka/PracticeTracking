/**
 * FreeCodeCamp: Redux: 10
 *
 * Combine Multiple Reducers
 *
 * Lesson on defining multiple reducers for a single Redux Store.
 */

/**
 * Counter Reducer Action Declarations
 */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/**
 * Counter Reducer Function
 * @param {number} state initial counter state
 * @cb Action declaration
 */
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default :
      return state;
  }
};

/**
 * Auth Reducer Action Declaration
 */
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

/**
 * Auth Reducer Function
 * @param {Object} state Initial Auth state
 * @cb Action declaration
 */
const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
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

/* Combine Reducers into rootReducer object */
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

/* Declare Store, tie to rootReducer */
const store = Redux.createStore(rootReducer);
