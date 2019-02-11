import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from 'react-router-dom';

import UsersList from "./components/UsersList";
import UserForm from './components/UserForm';

import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err));
  }

  deleteUser = (e,id) => {
    e.preventDefault();
    axios.delete(`http://localhost:4000/api/users/${id}`)
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <UsersList {...props} users={this.state.users} deleteUser={this.deleteUser} />} />
        <Route exact path='/user-form' render={props => <UserForm {...props} />} />
      </div>
    );
  }
}

export default App;
