import React from "react";
import "./WorksShowcase.css";

import WorkSlider from "../WorkSlider/WorkSlider";

const WorksShowcase = () => {
  return (
    <div className="works-showcase">
      <div className="works-content">
        <div className="works-info">
          <h2 className="works-heading">
            Driving Innovating with Domestic and International Clients.
          </h2>
          <p className="works-description">
            Transforming ideas into impactful solutions, I collaborate with
            domestic and international clients to drive innovation. My expertise
            in scalable development, branding, and AI-driven technologies
            ensures efficiency and precision. With a commitment to quality and
            adaptability, I build meaningful partnerships that deliver
            exceptional results.
          </p>
        </div>
        <WorkSlider />
      </div>
    </div>
  );
};

export default WorksShowcase;
