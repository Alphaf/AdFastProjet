import React from "react";
import DropdownSection from "./DropdownSection";
import "./SearchPanel.css";

function SearchPanel() {
  return (
    <div>
      <h1>What brand of panel are you using</h1>
      <DropdownSection></DropdownSection>
    </div>
  );
}

export default SearchPanel;
