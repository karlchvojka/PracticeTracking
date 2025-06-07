/**
 * FreeCodeCamp: 06_React_Redux - 08
 * 
 * Connect Redux to the Messenger App
 * 
 * Component Compesition within AppWrapper
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
    message: message
  }
};

/**
 * Message Reducer
 * 
 * Add Reducer function to handle interaction with state
 * 
 * @param {array} messages Initial State
 * @cb Action callback
 * @returns {array} New State
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
/* --- END STORE DECLARATIOn --- */

/* REACT COMPONENTS */

/**
 * Presentational Component
 */
class Presentational extends React.Component {
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
        message: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new message</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}
        /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
            })
          }
        </ul>
      </div>
    );
  }
};
/* END REACT COMPONENTS */

/**
 * Map State to Props
 * @param {array} state Default state
 * @returns {array} New state
 */
const mapStateToProps = (state) => {
  return { messages: state }
}

/**
 * Map Dispatch to Props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage))
    }
  }
}

/* --- PROVIDER DECLARATION --- */
const Provider = ReactRedux.Provider;
/* --- END PROVIDER DECLARATION --- */

/* --- REACT CONNECT DECLARATION --- */
const connect = ReactRedux.connect;
/* --- END REACT CONNECT DECLARATION --- */

/**
 * App Wrapper Component
 */
class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}