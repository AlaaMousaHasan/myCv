import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Layout
import MainLayout from "./components/layout/MainLayout";

// Sections
import Header from "./sections/Header/Header";
import About from "./sections/About/About";
import Section from "./sections/Section/Section";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Portfolio from "./sections/Portfolio/Portfolio";
import Contact from "./sections/Contact/Contact";
import MyProjects from "./sections/MyProjects/MyProjects";

// Styles
import "./assets/styles/App.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <About />
                  <Section />
                  <Portfolio />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myprojects" element={<MyProjects />} />
          </Routes>
        </div>
      </MainLayout>
    </Router>
  );
}

export default App;
