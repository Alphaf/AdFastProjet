import React from "react";
import FormInput from "./FormInput";
import "./LoginSection.css";
function LoginSection(props) {
  return (
    <div className="order-container">
      <h1>Order Now</h1>
      <FormInput selectedCol={props.selectedCol}></FormInput>
    </div>
  );
}

export default LoginSection;
