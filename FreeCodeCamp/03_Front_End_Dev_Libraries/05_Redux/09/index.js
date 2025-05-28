/**
 * FreeCodeCamp: Redux: Lesson 09
 *
 * Register a Store Listener
 */

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

//Global Count variable
let count = 0;

store.subscribe(() => count++);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({Type: ADD});
console.log(count);
store.dispatch({Type: ADD});
console.log(count);
