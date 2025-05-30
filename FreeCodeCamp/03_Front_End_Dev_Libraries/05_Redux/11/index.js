/**
 * FreeCodeCamp: Redux: Lesson 11
 *
 * Send Action Data to the Store
 */

/* ACTION DECLARATION */
const ADD_NOTE = 'ADD_NOTE';
/* END ACTION DECLARATION */

/**
 * Notes Reducer
 * 
 * Defines Notes Reducer Function
 * @param {string} state Initial State
 * @cb Action Callback
 */
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return action.text;
    default:
      return state;
  }
};

/**
 * Add Note Text Action Creator
 * @param {string} note Note content
 */
const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  }
};

/** REDUX STORE DECLARATION */
const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
