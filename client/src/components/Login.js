import React from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth"

class Login extends React.Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  // make a post request to retrieve a token from the api


  login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', this.state.credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/colors')
    })
    .catch(err => {
      localStorage.removeItem('token')
      console.log('invalid login: ', err)
    });
  }
  // when you have handled the token, navigate to the BubblePage route
  render() {
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={this.login}>
        <label>username:</label>
        <input
        type='text'
        name='username'
        value={this.state.credentials.username}
        onChange={this.handleChange}
        />
        <label>Password: </label>
        <input
        type="password"
        name="password"
        value={this.state.credentials.password}
        onChange={this.handleChange}
        />
        <button>Log In</button>
      </form>
    </>
  );
  }
};

export default Login;
