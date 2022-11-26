import React, { useState } from "react";

import "./style.css";

const Register = ({ setNewUser }) => {
  const [newUserLogin, setNewUserLogin] = useState("");

  const [registerError, setRegisterError] = useState("");

  const handleOnChange = (e) => {
    setNewUserLogin(e.target.value);
    setRegisterError("");
  };

  const handleAddNewUser = () => {
    if (newUserLogin.length >= 3) {
      setNewUser(newUserLogin);
      setNewUserLogin("");
    } else {
      setRegisterError("Min length 3 char");
      return;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddNewUser();
  };

  return (
    <div className="register-wrapper">
      <h3 className="register-title">Register</h3>
      <form onSubmit={handleOnSubmit} className="register-form">
        <div className="register-form-item">
          <label htmlFor="registerInput" className="register-form-item-label">login*:</label>
          <input
            id="registerInput"
            type="text"
            value={newUserLogin}
            onChange={handleOnChange}
            placeholder="Type new user login"
            className="register-form-item-input"
          />
        </div>
        <p className="register-form-input-error">{registerError.length ? registerError : ""}</p>
        <button type="submit" className="register-form-login-button">Add new</button>
      </form>
    </div>
  );
};

export default Register;
