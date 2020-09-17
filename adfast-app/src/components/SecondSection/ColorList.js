import React, { useState, useEffect } from "react";
import "./ColorList.css";
import ThirdSection from "../ThirdSection/ThirdSection";

function ColorList(props) {
  const [colorList, setcolorList] = useState();

  const [selectedCol, setSelectedCol] = useState();
  useEffect(() => {
    setcolorList(props.colorTable);
  });

  const handleClick = (tag) => {
    //alert(JSON.stringify(tag));
    setSelectedCol(tag.tag_nuancier_coul);
  };

  return (
    <>
      <div className="grid-container">
        {colorList &&
          colorList.ColorChartWrapper.map((value) => {
            return (
              <div
                className={
                  selectedCol === value.tag_nuancier_coul
                    ? "box-selected"
                    : "box-not-selected"
                }
              >
                <div
                  onClick={() => handleClick(value)}
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: value.nuancier_ref_html,
                  }}
                ></div>
                <p>{value.tag_nuancier_coul}</p>
              </div>
            );
          })}
      </div>
      <ThirdSection selectedCol={selectedCol}></ThirdSection>
    </>
  );
}

export default ColorList;
