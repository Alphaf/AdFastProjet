import React, { useState, useEffect } from "react";
import ColorList from "./ColorList";
import data from "../../data/Adfast 4580.json";
import "./AvailableColor.css";
function AvailableColors(props) {
  const [colorName, setcolorName] = useState();
  const [colorNuancersTable, setColorNuancersTable] = useState();
  useEffect(() => {
    setcolorName(props.colorName);
    loadColorLists();
  });
  const loadColorLists = () => {
    data.ColorWrapper.map((value) => {
      if (value.couleur_en === colorName) {
        if (value.nuanciers) {
          setColorNuancersTable(value.nuanciers);
        } else setColorNuancersTable(null);
      }
    });
  };
  return (
    <div className="color-container">
      <h1>{colorName} Available Colors</h1>
      {colorName && <ColorList colorTable={colorNuancersTable}></ColorList>}
    </div>
  );
}

export default AvailableColors;
