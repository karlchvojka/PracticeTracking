/**
 * FreeCodeCamp: 06_React_Redux - 07
 * 
 * Connect Redux to React
 * 
 * Use Connect method from React Redux to handle state and dispatch props to the component
 */

/**
 * Add Message
 * @param {string} message Message to be added
 */
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

/**
 * Map State to Props
 * 
 * @param {array} state Default state
 * @returns {array} New state
 */
const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

/**
 * Map Dispatch to props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
}

/**
 * Presentational React Class Component
 */
class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

/* --- REACT CONNECT DECLARATION --- */
const connect = ReactRedux.connect;
/* --- END REACT CONNEC DECLARATIONS --- */

/* PASS STATE AND PROPS TO REDUX */
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational)
/* END PASS STATE AND PROPS TO REDUX */