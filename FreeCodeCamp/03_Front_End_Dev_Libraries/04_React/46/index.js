/**
 * FreeCodeCamp: Lesson 46
 *
 * Use Array.Filter() to Dynamically Filter an Array.
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Lauara',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online);
    const renderOnline = usersOnline.map((user, index) => (
      <li key={index}>{user.username}</li>
    ));
    retrun (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    )
  }
}
