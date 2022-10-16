import React from "react";
import AI from "../assets/AI.png";
import "../css/footer.css";
import { Content } from "../export/footerContent";

const Footer = () => {
  return (
    <div className="ksh__footer">
      <div className="ksh__footer-container">
        <h1>
          AI <span>framework</span>
        </h1>
        {Content.map((data, index) => (
          <div className="ksh__footer-content" key={index}>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
      <div className="ksh__footer-img">
        <img src={AI} alt="Ai...." />
      </div>
    </div>
  );
};

export default Footer;
