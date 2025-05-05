import React from "react";
import "./Footer.css";
import blackBukText from "../../assets/images/blackBukText.jpg";
import topArrowAnimated from "../../assets/icons/topArrowAnimated.gif";

// Footer column component for reusability
const FooterColumn = ({ title, items }) => (
  <div className="footer-column">
    {title && <h3>{title}</h3>}
    <ul className="footer-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Scroll to top button component
const ScrollToTopButton = ({ onClick }) => (
  <button onClick={onClick} className="back-to-top">
    <img src={topArrowAnimated} alt="Scroll to top" />
  </button>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Data for footer columns
  const footerData = {
    company: {
      items: [
        "Our Work",
        "About Us",
        "Start a Project",
        "Terms & Services",
        "Privacy Policy",
      ],
    },
    services: {
      title: "Services",
      items: [
        "Tech & Innovation",
        "Experience & Design",
        "Strategy & Consulting",
        "Product Growth",
        "Creative Support",
      ],
    },
    solutions: {
      title: "Solutions",
      items: [
        "Mobile App Development",
        "Web Development",
        "UI/UX Design",
        "Custom Software Development",
        "Video Editing",
      ],
    },
    socials: {
      title: "Socials",
      items: ["Linkedin", "Twitter", "Instagram", "Threads", "Reddit"],
    },
  };

  return (
    <div className="footer">
      <div className="footer-content">
        {/* Company logo and info */}
        <div className="footer-column">
          <img src={blackBukText} alt="BlackBuk" className="footer-logo" />
          <FooterColumn items={footerData.company.items} />
          <div className="footer-copyright">© 2025 Blackbuk</div>
        </div>

        {/* Services, Solutions, and Socials columns */}
        {Object.entries(footerData)
          .filter(([key]) => key !== "company")
          .map(([key, data]) => (
            <FooterColumn key={key} title={data.title} items={data.items} />
          ))}
      </div>
      <ScrollToTopButton onClick={scrollToTop} />
    </div>
  );
};

export default Footer;
