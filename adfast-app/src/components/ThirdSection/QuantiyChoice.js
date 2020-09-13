import React, { useState } from "react";
import "./QuantityChoice.css";
import adSealFoil from "../../images/Adseal-DWS-4580-Foil.jpg";
import adSealCtg from "../../images/adseal-dws-ctg.jpg";

function QuantiyChoice() {
  var radio_props = [
    { label: "param1", value: 0 },
    { label: "param2", value: 1 },
  ];
  const [selectedOption, setSelectedOption] = useState("option1");
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
      <div>
        <button type="submit" className="btn btn-primary btn-block">
          Find the sealant for your panel
        </button>
      </div>
    </>
  );
}

export default QuantiyChoice;
