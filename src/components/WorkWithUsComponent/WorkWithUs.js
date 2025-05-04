import React from "react";
import "./WorkWithUs.css";

import macWorkingTimeLapse from "../../assets/videos/macWorkingTimeLapse.mp4";
import arrowRightUp from "../../assets/icons/arrowRightUp.png";

const WorkWithUs = () => {
  return (
    <div className="work-with-us-container">
      <video autoPlay muted loop className="background-video">
        <source src={macWorkingTimeLapse} type="video/mp4" />
      </video>
      <div className="content-container">
        <button className="work-with-us-button">
          Work With Us
          <img src={arrowRightUp} alt="arrow" className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default WorkWithUs;
