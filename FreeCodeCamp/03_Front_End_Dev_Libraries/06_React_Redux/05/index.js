/**
 * FreeCodeCamp: 06_React_Redux - 05
 * 
 * Map State Props
 * 
 * Connect state props, and dispatch functions to components
 */

/* --- DEFAULT STATE DECLARATION --- */
const state = [];
/* --- END DEFAULT STATE DECLARATION --- */

/**
 * Map state top props
 * @param {array} state Default state
 * @returns {array} State
 */
const mapStateToProps = (state) => {
    return {
        messages: state
    }
}