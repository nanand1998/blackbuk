import React, { useState } from "react";
import "./WorkSlider.css";

import healthPulse from "../../assets/images/healthPulse.jpeg";
import packageDeliveryApp from "../../assets/images/packageDeliveryApp.jpeg";
import podcastMobileApp from "../../assets/images/podcastMobileApp.jpeg";
import travelApp from "../../assets/images/travelApp.jpeg";

import forwardArrow from "../../assets/icons/forwardArrow.png";
import backwardArrow from "../../assets/icons/backwardArrow.png";

const slides = [
  {
    image: healthPulse,
    title: "Health Pulse",
    description: "Real-time health monitoring application.",
  },
  {
    image: packageDeliveryApp,
    title: "Package Delivery",
    description: "Efficient package tracking and delivery system.",
  },
  {
    image: podcastMobileApp,
    title: "Podcast App",
    description: "Stream and manage your favorite podcasts.",
  },
  {
    image: travelApp,
    title: "Travel App",
    description: "Plan and manage your travel itineraries.",
  },
];

const WorkSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % slides.length;
      visibleSlides.push({ ...slides[index], index });
    }
    return visibleSlides;
  };

  return (
    <div className="carousel">
      <div className="slides-container">
        {getVisibleSlides().map((slide, index) => ( 
          <div key={slide.index} className="slide">
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={prevSlide} className="navigation-button">
          <img src={backwardArrow} alt="Previous" />
        </button>
        <button onClick={nextSlide} className="navigation-button">
          <img src={forwardArrow} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default WorkSlider;
