import React from "react";
import "./WhatWeDo.css";

import Accordion from "../Accordian/Accordian";

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <div className="what-we-do__content">
        <h1 className="what-we-do__title">what we do</h1>
        <p className="what-we-do__description">
          Sophisticated solutions grounded in established methodologies.
        </p>
      </div>
      <Accordion />
    </div>
  );
};

export default WhatWeDo;
