import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {


userMapper = () => {
  return this.props.users.map(user=>
  {return <li>{user.username} </li>})
}

  
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
        {this.userMapper()}

        User count: {this.props.amount}
        </ul>
      </div>
    )
  }
}


//add mapStateToProps here
const  mapStateToProps = state => {
  return { users: state.users, amount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
