import React from "react";

import "./style.css";

const Home = ({ handleLogout, loginUser }) => {
  return (
    <div className="home-wrapper">
      <h1 className="home-tittle">
        Hi <span className="home-userName">{loginUser.toUpperCase()}</span>,
        Welcome
      </h1>
      <button className="home-button-logout" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
