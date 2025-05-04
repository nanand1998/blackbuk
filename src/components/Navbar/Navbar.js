import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/expertise">Expertise</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button className="nav-button">Start a Project!</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
