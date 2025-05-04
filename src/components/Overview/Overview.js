import React from "react";
import "./Overview.css";

import dataAnalysis1 from "../../assets/icons/dataAnalysis1.png";
import aiIntegrationIcon from "../../assets/icons/aiIntegrationIcon.png";
import contentWritingIcon from "../../assets/icons/contentWritingIcon.png";
import techDevelopmentIcon from "../../assets/icons/techDevelopmenIcon.png";
import uiUxDesignIcon from "../../assets/icons/uiUxDesignIcon.png";
import videoEditingIcon from "../../assets/icons/videoEditingIcon.png";
import soundProductionIcon from "../../assets/icons/SoundProductionIcon.png";

import arrowUpRightIcon from "../../assets/icons/arrowUpRightIcon.png";

const services = [
  {
    icon: techDevelopmentIcon,
    title: "Tech Development",
    alt: "Tech Development Icon",
  },
  {
    icon: uiUxDesignIcon,
    title: "UI/UX Design",
    alt: "UI/UX Design Icon",
  },
  {
    icon: dataAnalysis1,
    title: "Data Analysis",
    alt: "Data Analysis Icon",
  },
  {
    icon: aiIntegrationIcon,
    title: "AI Integration",
    alt: "AI Integration Icon",
  },
  {
    icon: videoEditingIcon,
    title: "Video Editing",
    alt: "Video Editing Icon",
  },
  {
    icon: soundProductionIcon,
    title: "Sound Production",
    alt: "Sound Production Icon",
  },
  {
    icon: contentWritingIcon,
    title: "Content Writing",
    alt: "Content Writing Icon",
  },
];

const Overview = () => {
  return (
    <section className="overview-section">
      <div className="overview-content">
        <p className="overview-paragraph-text">
          Leveraging half-decade of expertise, Utility collaborates with
          forward-thinking client partners to develop cutting-edge products.
        </p>
        <div className="tech-services-container">
          {services.map((service, index) => (
            <div key={index} className="service-container">
              <img
                src={service.icon}
                alt={service.alt}
                className="service-icon"
              />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
        <div className="creative-services-container"></div>
        <button className="view-all-services-btn">
          View All Services
          <img src={arrowUpRightIcon} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Overview;
