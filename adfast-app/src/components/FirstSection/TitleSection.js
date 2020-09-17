import React, { useState } from "react";
import "./TitleSection.css";
import { ReactComponent as PlayLogo } from "../../images/Play-Button.svg";
import { ReactComponent as AdfastLogo } from "../../images/Adfast-logo-white.svg";

function TitleSection() {
  return (
    <div className="title-container">
      <div className="title">
        <AdfastLogo></AdfastLogo>
      </div>

      <h1>We are the leading Experts in Silicone Sealant Color Technologies</h1>
      <div className="title-btn">
        <button className="btn btn-primary btn-block">
          <PlayLogo></PlayLogo>
          <a className="btn" href="https://www.youtube.com/watch?v=VBsSyTL1nO8">
            Get to know us
          </a>
        </button>
      </div>
    </div>
  );
}

export default TitleSection;
