import React from "react";

import User from "./User";

import "./User.css";

const UsersList = props => {
  return (
    <div className="users-cont">
      {props.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
