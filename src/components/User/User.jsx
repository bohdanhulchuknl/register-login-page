import React from "react";

import "./style.css";

const User = ({ user, handleDeleteUser }) => {
  const handleDeleteUserOnClick = () => {
    handleDeleteUser(user);
  };

  return (
    <div className="user-item-container">
      <div className="user-item-title">
        User login: <span className="user-item-name">{user}</span>
      </div>
      <div className="user-item-delete" onClick={handleDeleteUserOnClick}>
        delete
      </div>
    </div>
  );
};

export default User;
