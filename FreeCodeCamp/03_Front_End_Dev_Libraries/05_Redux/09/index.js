/**
 * FreeCodeCamp: Redux: Lesson 09
 *
 * Register a Store Listener
 */

/* ACTION DECLARATIONS */ 
const ADD = 'ADD';
/* END ACTION DECLARATIONS */

/**
 * Redux Reducer Function
 * @param {number} state default state.
 * @param {cb} action Action definition
 */
const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

/**
 * Reducx Store Declaration
 */
const store = Redux.createStore(reducer);

/* GLOBAL VARIABLE DECLARATION */
let count = 0;
const add = () => count++;
store.subscribe(add);

/**
 * NOTE:
 * Console.log(count); logs out the value of the count global variable.\
 * This example does not use the state for anything other than POC
 * This is mostly because its for learning purposes.
 */
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
