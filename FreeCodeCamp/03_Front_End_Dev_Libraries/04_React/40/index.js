/**
  * FreeCodeCamp Lesson 40
  *
  * Use && for a More Concise Conditional
  */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
       {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
};
