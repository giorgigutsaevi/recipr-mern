import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome--page">
      <h1 className="welcome--page__title">Welcome to Recipr</h1>
      <div className="container">
        <div className="row">
          <div className="col-md"></div>
          <img
            src="/images/welcomepage.png"
            alt="welcome-img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
