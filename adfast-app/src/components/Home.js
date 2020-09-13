import React from "react";
import TitleSection from "./FirstSection/TitleSection";
import SecondSection from "./SecondSection/SecondSection";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <TitleSection></TitleSection>
        <SecondSection></SecondSection>
      </div>
    </>
  );
}
export default Home;
