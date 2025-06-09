/**
 * FreeCodeCamp: 06_React_Redux - 01
 * 
 * Getting Started with React Redux
 * 
 * Add a constructor to the React component
 */

/**
 * DisplayMessages
 * 
 * React Component to Display messages.
 */
class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        /**
         * Default State
         */
        this.state = {
            input: "",
            messages: []
        };
    };
    render () {
        return <div />
    }
};