import React, { Component } from "react";
import axios from "axios";

import UsersList from "./components/UsersList";

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

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
