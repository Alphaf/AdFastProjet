import React from "react";
import LoginSection from "./LoginSection";
import QuantiyChoice from "./QuantiyChoice";

function ThirdSection(props) {
  return (
    <div>
      <LoginSection selectedCol={props.selectedCol}></LoginSection>
    </div>
  );
}

export default ThirdSection;
