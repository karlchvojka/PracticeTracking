/**
 * FreeCodeCamp - Redux - Lesson 12
 *
 * Use Middleware to Handle Asyncronous Actions
 * Expands on the Redux basics in the last lesson to include thunking middleware
 */

/* --- ACTION DECLARATIONS --- */
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECIEVED_DATA = 'RECIEVED_DATA'
/* --- END ACTION DECLARATIONS --- */

/* --- ACTION CREATORS --- */
const requestingData = () => { return {type: REQUESTING_DATA} }
const recievedData = (data) => { return {type: RECIEVED_DATA, users: data.users} }
/* --- END ACTION CREATORS --- */

/**
 * Handle Async
 *
 * Initializes Async into the Redux time line.
 */
const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here:
    store.dispatch(requrestingData())
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      store.dispatch(recievedData(data))
    }, 2500);
  }
};

/**
 * Default State Initialization
 */
const defaultState = {
  fetching: false,
  users: []
};

/**
 * Async Data Reducer function
 *
 * Handles async functions for the Redux state setup.
 * @param {object} defaultState Default State
 * @cb Action callback.
 */
const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetiching: true,
        users: []
      }
    case RECIEVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

/* --- REDUX STORE DEFINITION --- */
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
/* --- END REDUX STORE DEFINITION --- */
