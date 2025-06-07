/**
 * FreeCodeCamp: 06_React_Redux - 04
 * 
 * Use Provider to Connect Redux to React
 * Allows you to access the Redux store and dispatch functions.
 */

/* --- ACTION DEFINITIONS --- */
const ADD = 'ADD';
/* --- END ACTION DEFINITIONS --- */

/**
 * Add Message Action creator
 * @param {string} message Message to be added
 */
const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

/**
 * Messages Reducer
 * 
 * Add Reducer function to handle interaction with state
 * 
 * @param {array} messages Initial state
 * @cb Action callback
 * @returns {array} New state
 */
const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

/* --- STORE DECLARATION --- */
const store = Redux.createStore(messageReducer);
/* --- STORE DECLARATION --- */

/**
 * Display Messages Component
 */
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.submitMessage}
        /><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

/* --- PROVIDER DECLARATION --- */
const Provider = ReactRedux.Provider;
/* --- End PROVIDER DECLARATION --- */

/***
 * App Wrapper Component
 */
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
}
