import React, { useState } from "react";

import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Users from "../Users/Users";

import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState("");
  const [isUserLogin, setIsUserLogin] = useState(false);

  const [loginError, setLoginError] = useState("");

  const handleSetNewUser = (value) => {
    setUsers((prev) => [...prev, value]);
  };

  const handleLogout = () => {
    setIsUserLogin(false);
    setLoginUser("");
  };

  const handleDeleteUser = (value) => {
    setUsers((prev) => prev.filter((item) => item !== value));
    if (value === loginUser) {
      handleLogout();
    }
  };

  const handleLogin = (value) => {
    const user = users.find((user) => user === value);
    if (user) {
      setLoginUser(user);
      setIsUserLogin(true);
      setLoginError("");
    } else {
      setLoginError("User not FOUND");
    }
  };

  return (
    <div className="page-wrapper">
      <Users users={users} handleDeleteUser={handleDeleteUser} />

      {isUserLogin ? (
        <Home handleLogout={handleLogout} loginUser={loginUser} />
      ) : (
        <div>
          <Login
            handleLogin={handleLogin}
            loginError={loginError}
            setLoginError={setLoginError}
          />
          <Register setNewUser={handleSetNewUser} />
        </div>
      )}
    </div>
  );
};

export default App;
