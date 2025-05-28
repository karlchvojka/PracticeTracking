/* Pass a Callback as Props */
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVale: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <ReturnInput input={this.state.inputValue} />
      </div>
    )
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}

class RenderInput extends React.Components {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div>
        <h3>INput Render:</h3>
        <p>{this.props.input}</p>
      </div>
    )
  }
}