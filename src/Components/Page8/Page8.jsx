import React from "react";
import './Page.scss'
import AnimatedSVG from "../AnimatedSVG/AnimatedSVG";
import DemoPage from "../DemoPage/DemoPage";

const Page8 = () => {
  return (
    <div id="page8" className="page-container">
      <div className="svg-container">
        <AnimatedSVG />
      </div>
      <div className="demo-page-container">
        <DemoPage />
      </div>
    </div>
  );
};

export default Page8;
