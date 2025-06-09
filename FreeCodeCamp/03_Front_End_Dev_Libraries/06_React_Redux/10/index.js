/**
 * FreeCodeCamp: 06_React_Redux - 10
 * 
 * Example of a React app configured locally and not in a web based code editor.
 * 
 * impot React from 'react'
 * import ReactDOM from 'react-dom'
 * import { Provider, connect } from 'react-redux'
 * import { createStore, combineReducers, applyMiddleware} from 'redux'
 * import thunk from 'redux-thunk'
 * 
 * import rootReducer from './redux/reducers'
 * import App from './components/App'
 * 
 * const store = createStore(
 *  rootReducer,
 *  applyMiddleware(thunk)
 * );
 * 
 * ReactDOM.render(
 *  <Provider store={store}>
 *    <App /> 
 *  </Provider>,
 *  document.getElementById('root')
 * );
 */

console.log('Now I know React and Redux!');