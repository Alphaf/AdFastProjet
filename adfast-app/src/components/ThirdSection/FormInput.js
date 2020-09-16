import React, { useState, useEffect } from "react";
import QuantiyChoice from "./QuantiyChoice";

function FormInput() {
  const [nameInput, setLastNameInput] = useState();
  const [firstNameInput, setFirstNameInput] = useState();
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
      <QuantiyChoice isNamePresent={isFirstAndLastNamePresent}></QuantiyChoice>
    </>
  );
}

export default FormInput;
