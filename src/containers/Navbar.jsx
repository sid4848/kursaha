import React from "react";
import "../css/navbar.css";
import Docs from "../assets/docs.svg";
import Git from "../assets/github.svg";
import Signin from "../assets/signin.svg";

const Navbar = () => {
  const links = [
    { image: Git, title: "Github" },
    { image: Docs, title: "Docs" },
    { image: Signin, title: "signin" },
  ];
  return (
    <div className="ksh__navbar">
      {links.map((link, index) => (
        <div className="ksh__navbar-links" key={index}>
          <img src={link.image} alt="imgages..." />
          <a href="#">{link.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
