import React from "react";
import axios from "axios";

class Login extends React.Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  // make a post request to retrieve a token from the api


  login = e => {
    e.preventDefault();
    axios
    .post('/login', this.state.credentials)
    .then(res => {
      this.props.history.push('/')
    })
    .catch(err => {
      console.log('invalid login: ', err)
    });
  }
  // when you have handled the token, navigate to the BubblePage route
  render() {
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
  }
};

export default Login;
