import React, { useState, useEffect } from "react";
import "./QuantityChoice.css";
import adSealFoil from "../../images/Adseal-DWS-4580-Foil.jpg";
import adSealCtg from "../../images/adseal-dws-ctg.jpg";

function QuantiyChoice(props) {
  const [selectedOption, setSelectedOption] = useState();
  const [isNamePresent, setIsNamePresent] = useState(false);
  useEffect(() => {
    setIsNamePresent(props.isNamePresent);
  });
  const handleOptionChange = (value) => {
    setSelectedOption(value.target.value);
  };
  return (
    <>
      <div className="row">
        <div className="item-1 col">
          <img src={adSealCtg}></img>
        </div>
        <div className="item-2 col">
          <img src={adSealFoil}></img>
        </div>
      </div>
      <form className="form-container">
        <div className="radio">
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            300ml
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            600ml
          </label>
        </div>
      </form>
      <div className="btn-qty">
        <button
          type="submit"
          className={
            isNamePresent
              ? "btn btn-primary btn-block"
              : "btn btn-secondary btn-block"
          }
          disabled={!isNamePresent}
        >
          Find the sealant for your panel
        </button>
      </div>
    </>
  );
}

export default QuantiyChoice;
