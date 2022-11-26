import React, { useState } from "react";

import "./style.css";

const Login = ({ handleLogin, loginError, setLoginError }) => {
  const [login, setLogin] = useState("");

  const handleOnChange = (e) => {
    setLogin(e.target.value);
    setLoginError("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (login.length) {
      handleLogin(login);
    } else {
      return;
    }
  };

  return (
    <div className="login-wrapper">
      <h3 className="login-title">Login form</h3>
      <form onSubmit={handleOnSubmit} className="login-form">
        <div className="login-form-item">
          <label htmlFor="login" className="login-form-item-label">login:</label>
          <input
            id="login"
            type="text"
            value={login}
            onChange={handleOnChange}
            placeholder="Type your Login"
            className="login-form-item-input"
          />
          
        </div>
        <p className="login-form-input-error">{loginError.length ? loginError : ""}</p>
        <button className="login-form-login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
