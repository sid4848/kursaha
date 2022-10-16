import React from "react";
import "../css/title.css";
import Logo from "../assets/logo.svg";

const Title = () => {
  return (
    <div className="ksh__title">
      <img src={Logo} alt="logo..." />
      <button className="btn" type="submit">
        <a href="#">Talk to us</a>
      </button>
    </div>
  );
};

export default Title;
