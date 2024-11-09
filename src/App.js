import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Section from './Section';
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* Main page with Header, About, and Section links */}
                <Route
                    path="/"
                    element={
                        <React.Fragment>
                            <Header />
                            <About />
                            <Section />
                        </React.Fragment>
                    }
                />

                {/* Separate pages for each section */}
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
