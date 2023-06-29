import React from "react";
import cardFrontImage from "./black-lotus-front.jpeg";
import cardBackImage from "./black-lotus-back.jpeg";
import "./loader.css";

const Loader = () => {
  return (
    <div className="card-wrapper">
      <img className="card" src={cardFrontImage} alt="" />
      <img className="card card-back" src={cardBackImage} alt="" />
    </div>
  );
};

export default Loader;

