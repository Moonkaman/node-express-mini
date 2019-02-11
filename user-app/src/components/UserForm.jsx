import React from "react";

const UserForm = props => {
  return (
    <form>
      <h4>Name</h4>
      <input type="text" placeholder="Name" />
      <h4>Bio</h4>
      <input type="text" placeholder="Bio" />
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
