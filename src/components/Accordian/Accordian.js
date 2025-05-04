import React, { useState, useRef } from "react";
import "./Accordian.css";

import designingPhoto from "../../assets/images/designingPhoto.jpg";
import strategyPhoto from "../../assets/images/strategyPhoto.jpg";
import technology from "../../assets/images/technology.jpg";

const accordionData = [
  {
    heading: "Technology",
    content:
      "React is a JavaScript library for building user interfaces. It was developed by Facebook and is maintained by Facebook and a community of individual developers.",
    image: technology,
  },
  {
    heading: "Experience",
    content:
      "React allows developers to create large web applications that can change data without reloading the page. Its main purpose is to be fast, scalable, and simple.",
    image: designingPhoto,
  },
  {
    heading: "Strategy",
    content:
      "Some key features include Virtual DOM, JSX syntax, component-based architecture, and unidirectional data flow. These features make React efficient and easy to use.",
    image: strategyPhoto,
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(accordionData[0].image);
  const [isImageFading, setIsImageFading] = useState(false);
  const hoverTimeout = useRef(null); // Store timeout reference

  const handleHover = (index) => {
    if (openIndex !== index) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => {
        setIsImageFading(true);
        setTimeout(() => {
          setCurrentImage(accordionData[index].image);
          setIsImageFading(false);
        }, 300);
        setOpenIndex(index);
      }, 150);
    }
  };

  return (
    <div className="accordion-section">
      <div className="accordion-title"></div>
      <div className="accordion-wrapper">
        <div className="accordion-left">
          <div className="what-we-do__content">
            <h1 className="what-we-do__title">What We Do</h1>
            <p className="what-we-do__description">
              Sophisticated solutions grounded in established methodologies.
            </p>
          </div>
          {accordionData.map((item, index) => (
            <div
              className="accordion"
              key={index}
              onMouseEnter={() => handleHover(index)}
            >
              <div className="accordion-header">
                <h3>{item.heading}</h3>
              </div>
              <div
                className={`accordion-content ${
                  openIndex === index ? "open" : ""
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
          <div className="button-wrapper">
            <button className="view-all-button">Learn More</button>
          </div>
        </div>
        <div className="accordion-right">
          <img
            src={currentImage}
            alt="Section"
            className={isImageFading ? "fade" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
