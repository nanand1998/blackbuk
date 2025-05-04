import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components//Navbar/Navbar";

import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Expertise from "./pages/Expertise/Expertise";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
