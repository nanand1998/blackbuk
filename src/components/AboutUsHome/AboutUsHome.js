import "./AboutUsHome.css";

import ElonMusk from "../../assets/images/ElonMusk.avif";
import jeff from "../../assets/images/jeff.avif";

const AboutUsHome = () => {
  return (
    <div className="about-us-home">
      <div className="about-us-content">
        <div className="about-us-subtitle">Who we are</div>
        <div className="about-us-description">
          We specialize in delivering premium, customized solutions that drive
          excellence. Our innovative approaches and dedicated expertise ensure
          outstanding results. Through cutting-edge technology and strategic
          thinking, we transform challenges into opportunities that consistently
          exceed client expectations.
        </div>
        <div className="button-container">
          <button className="about-us-button">About Us</button>
        </div>
      </div>
      <div className="about-us-sections">
        <div className="about-section">
          <div className="about-card">
            <img src={ElonMusk} alt="Our Mission" />
          </div>
          <h3>Our Mission</h3>
          <p>
            To provide innovative solutions that transform businesses and
            enhance user experiences.
          </p>
        </div>
        <div className="about-section">
          <div className="about-card">
            <img src={jeff} alt="Our Vision" />
          </div>
          <h3>Our Vision</h3>
          <p>
            To become a leading force in digital transformation and
            technological excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
