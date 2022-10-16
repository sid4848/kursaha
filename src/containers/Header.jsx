import React from "react";
import Email from "../assets/Email.png";
import "../css/header.css";

const Header = () => {
  return (
    <div className="ksh__header">
      <h1>Grow your Business with Email Automation</h1>
      <img src={Email} alt="email.." />
      <button className="btn" type="submit">
        <a href="#">Get Started</a>
      </button>
    </div>
  );
};

export default Header;
