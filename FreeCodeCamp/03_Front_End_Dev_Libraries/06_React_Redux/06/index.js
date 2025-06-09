/**
 * FreeCodeCamp: 06_React_Redux - 06
 * 
 * Map Dispatch to Props
 * 
 * Connecting the submitted message from React, and passing it to Redux as a prop
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
 * Map Dispatch To Props
 * 
 * Dispatch the Redux action that takes function addMessage and new message
 */
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: function(message) {
            dispatch(addMessage(message));
        }
    }
}