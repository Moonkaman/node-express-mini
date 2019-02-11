import React from "react";

const User = props => {
  return (
    <div className="user-cont">
      <h2>{props.user.name}</h2>
      <p>{props.user.bio}</p>
    </div>
  );
};

export default User;
