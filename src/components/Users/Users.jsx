import React from "react";

import User from "../User/User";

import "./style.css";

const Users = ({ users, handleDeleteUser }) => {
  return (
    <div className="users-wrapper">
      <h3 className="users-title">All users</h3>
      {users.length > 0 ? (
        <div className="users-container">
          {users.map((user, index) => (
            <User user={user} handleDeleteUser={handleDeleteUser} key={index} />
          ))}
        </div>
      ) : (
        <p className="users-empty-text">Empty</p>
      )}
    </div>
  );
};

export default Users;
