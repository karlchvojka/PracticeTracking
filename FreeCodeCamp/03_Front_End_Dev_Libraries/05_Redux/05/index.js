/**
 * FreeCodeCamp: Redux - Lesson 05
 *
 * Dispatch an Action Event
 */

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
