/**
 * FreeCodeCamp: 06_React_Redux - 09
 * 
 * Extract Local State Into Redux
 * 
 * Move state management from a Reduct Component and into the Redux store.
 */

/* --- ACTION DEFINITION --- */
const ADD = 'ADD';
/* --- END ACTION DEFINITION --- */

/**
 * Add Message Action creator
 * @param {string} message Message to be added
 * @returns {object} addMessage action
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
/* --- END STORE DECLARATION --- */

/* --- PROVIDER DECLARATION --- */
const Provider = ReactRedux.Provider;
/* --- END PROVIDER DECLARATION --- */

/* --- REACT CONNECT DECLARATION --- */
const connect = ReactRedux.connect;
/* --- REACT CONNECT DECLARATION --- */

/* REACT COMPONENTS */

/**
 * Presentational Component
 * 
 * @returns {Component} Component to connect React to Redux
 */
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}
        /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {
            this.props.messages.map( (message, idx) => {
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
 * @returns {array} New State
 */
const mapStateToProps = (state) => {
  return {message: state}
};

/**
 * Map Dispatch to Props
 * 
 * @cb Dispatch callback
 * @returns {object} Dispatch Action to action creator
 */
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

/* --- CONNECT METHOD DECLARATION --- */
const Container = connect(mapStateToProps, mapDispatchToProps) (Presentational)
/* --- END CONNECT METHOD DECLARATION --- */

/**
 * App Wrapper Component
 * 
 * @returns {Component} App Component
 */
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}