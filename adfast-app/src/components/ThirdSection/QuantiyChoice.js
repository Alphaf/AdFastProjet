import React, { useState, useEffect } from "react";
import "./QuantityChoice.css";
import adSealFoil from "../../images/Adseal-DWS-4580-Foil.jpg";
import adSealCtg from "../../images/adseal-dws-ctg.jpg";
import { Link } from "react-router-dom";
import fire from "../Firebase/firebase";
function QuantiyChoice(props) {
  const [selectedOption, setSelectedOption] = useState();
  const [isNamePresent, setIsNamePresent] = useState(false);
  const [dbUserRef, setdbUserRef] = useState();
  const [selectedCol, setSelectedCol] = useState();

  useEffect(() => {
    setIsNamePresent(props.isNamePresent);
    setdbUserRef(props.dbUserRef);
    setSelectedCol(props.selectedCol);
  });
  const handleOptionChange = (value) => {
    setSelectedOption(value.target.value);
  };
  const onAddBtnClicked = () => {
    fire.database().ref(dbUserRef).push(selectedCol);
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
        <Link to={{ pathname: "/log-in", query: { the: "query" } }}>
          <button
            type="submit"
            className={
              isNamePresent
                ? "btn btn-primary btn-block"
                : "btn btn-secondary btn-block"
            }
            disabled={!isNamePresent}
            onClick={onAddBtnClicked}
          >
            Find the sealant for your panel
          </button>
        </Link>
      </div>
    </>
  );
}

export default QuantiyChoice;
