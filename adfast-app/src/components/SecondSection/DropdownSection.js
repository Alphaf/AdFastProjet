import React, { useState } from "react";
import data from "../../data/Adfast 4580.json";
import Select from "react-select";
import AvailableColors from "./AvailableColors";
import "./DropdownSection.css";
function DropdownSection() {
  //alert(JSON.stringify(data.ColorWrapper))
  const colorsName = [];
  const defaultOption = "Pick the brand";
  data.ColorWrapper.map((value) => {
    let newdata = { value: value.couleur_en, label: value.couleur_en };
    colorsName.push(newdata);
  });

  const [colorSelected, setcolorSelected] = useState("");

  const [isColorSelected, setIsColorSelected] = useState(false);
  const onSelect = (selectedOption) => {
    setcolorSelected(selectedOption.value);
    setIsColorSelected(true);
  };
  return (
    <div className="dropdown-container">
      <Select
        options={colorsName}
        placeholder={defaultOption}
        onChange={onSelect}
        autoFocus={true}
      ></Select>
      {isColorSelected && <AvailableColors colorName={colorSelected} />}
    </div>
  );
}

export default DropdownSection;
