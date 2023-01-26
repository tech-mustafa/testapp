import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../../pages/about";
import Contact from "../../pages/contact";
import Home from "../../pages/home";
import Header from "../header";

const RouterComponent: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default RouterComponent;
