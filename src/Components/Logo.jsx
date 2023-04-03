import React from "react";
import logo from "../Assets/Images/logowhite.png";

function Logo() {
  return (
    <div className="logo">
      <div className="logo-flex">
        <img src={logo} alt="logo"></img>
        <span>Infikart</span>
      </div>
      <span className="slogan">Make your day easy</span>
    </div>
  );
}

export default Logo;
