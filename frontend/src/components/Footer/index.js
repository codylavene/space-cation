import React from "react";
import "./Footer.css";
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="techs">
        <span>React</span>
        <span>Redux</span>
        <span>JavaScript</span>
        <span>HTML5</span>
        <span>CSS</span>
        <span>Express</span>
        <span>PostgreSQL</span>
        <span>AWS</span>
      </div>
      <div className="my-details">©2022 Cody Lavene</div>
    </div>
  );
};

export default Footer;
