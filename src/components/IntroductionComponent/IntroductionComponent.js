import React from "react";
import "./IntroductionComponent.css";

import IntroductionTextComponent from "../IntroductionTextComponent/IntroductionTextComponent";
import WorkWithUs from "../WorkWithUsComponent/WorkWithUs";
import Overview from "../Overview/Overview";

const IntroductionComponent = () => {
  return (
    <div className="introduction-container">
      <div className="content-overlay center-content">
        <IntroductionTextComponent />
        <div className="horizontalContainer">
          <WorkWithUs />
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default IntroductionComponent;
