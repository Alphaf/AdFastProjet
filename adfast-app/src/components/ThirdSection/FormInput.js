import React, { useState, useEffect } from "react";
import QuantiyChoice from "./QuantiyChoice";

function FormInput(props) {
  const [nameInput, setLastNameInput] = useState();
  const [firstNameInput, setFirstNameInput] = useState();
  const [dbUserRef, setdbUserRef] = useState();
  const [selectedCol, setSelectedCol] = useState();
  const [isFirstAndLastNamePresent, setIsFirstAndLastNamePresent] = useState(
    false
  );

  const onLastNameInputChanged = (e) => {
    setLastNameInput(e.target.value);
  };

  const onFirstNameInputChanged = (e) => {
    setFirstNameInput(e.target.value);
  };

  useEffect(() => {
    if (firstNameInput && nameInput) {
      setIsFirstAndLastNamePresent(true);
      setdbUserRef(nameInput + firstNameInput);
      setSelectedCol(props.selectedCol);
    }
  });

  return (
    <>
      <form>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={onLastNameInputChanged}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={onFirstNameInputChanged}
          />
        </div>
      </form>

      <QuantiyChoice
        isNamePresent={isFirstAndLastNamePresent}
        dbUserRef={dbUserRef}
        selectedCol={selectedCol}
      ></QuantiyChoice>
    </>
  );
}

export default FormInput;
