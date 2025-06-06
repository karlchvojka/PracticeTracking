/**
 * FreeCodeCamp: 05_Redux - 14
 *
 * Never Mutate State
 * 
 * Build an example of state being added to, but not mutated.
 */

/* --- ACTION DEFINITIONS --- */
const ADD_TO_DO = 'ADD_TO_DO';
/* --- END ACTION DEFINITIONS --- */

/* --- EXAMPLE DATA --- */
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook Dinner',
  'Learn to code'
];
/* --- END EXAMPLE DATA --- */

/**
 * Example Immutable Reducer
 *
 * An example of a reducer function, with immutable state.
 *
 * @param {array} todos Example initial state
 * @cb Action callback
 * @returns {array} New state
 */
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo)
    default: 
      return state;
  }
};

/**
 * Add To Do Action creator
 * @param {string} todo Todo to be added
 */
const addTodo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

/* --- REDUX STORE DEFINITION --- */
const store = Redux.createStore(immutableReducer);
/* --- END REDUX STORE DEFINITION --- */
