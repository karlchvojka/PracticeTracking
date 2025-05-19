/* Use the Lifecycle Method componentWillMount */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('stuff')
  }
  render() {
    return <div />
  }
}