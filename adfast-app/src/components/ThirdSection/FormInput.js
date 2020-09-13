import React from "react";

function FormInput() {
  return (
    <>
      <form>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </form>
    </>
  );
}

export default FormInput;
