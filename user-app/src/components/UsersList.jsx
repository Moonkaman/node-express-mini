import React from "react";

import User from "./User";

import "./User.css";

const UsersList = props => {
  return (
    <div className="users-cont">
      <h1>Users</h1>
      {props.users.map(user => (
        <User deleteUser={props.deleteUser} key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
