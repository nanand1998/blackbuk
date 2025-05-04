import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./IntroductionTextComponent.css";

import { headingText, changingTexts, descriptionText } from "../../texts";

const IntroductionTextComponent = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % changingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section-container">
      <div className="hero-content-overlay">
        <motion.div className="hero-main-heading fade-in">
          {headingText}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentText}
            className="animated-tagline fade-in-out"
          >
            {changingTexts[currentText]}
          </motion.div>
        </AnimatePresence>
        <motion.div className="hero-description fade-in-delayed">
          {descriptionText}
        </motion.div>
      </div>
    </div>
  );
};

export default IntroductionTextComponent;
