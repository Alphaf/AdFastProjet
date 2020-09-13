import React, { useState, useEffect } from "react";
import "./ColorList.css";
import { render } from "@testing-library/react";
import ThirdSection from "../ThirdSection/ThirdSection";

function ColorList(props) {
  const [colorList, setcolorList] = useState();

  useEffect(() => {
    setcolorList(props.colorTable);
  });

  return (
    <>
      <div className="grid-container">
        {colorList &&
          colorList.ColorChartWrapper.map((value) => {
            return (
              <div className="block-color">
                <div className="box">
                  <div className="rectangle"></div>
                  <p>{value.tag_nuancier}</p>
                </div>
              </div>
            );
          })}
      </div>
      <ThirdSection></ThirdSection>
    </>
  );
}

export default ColorList;
