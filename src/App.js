import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Header from './Header';
import About from './About';
import Section from './Section';
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import MyProjects from "./MyProjects"
import './App.css';

function App() {
    return (
        <Router>
            <Layout>
                <div className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Header />
                                    <About />
                                    <Section />
                                    <Portfolio/>
                                    
                                </>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/MyProjects" element={<MyProjects />} />

                    </Routes>
                </div>
            </Layout>
        </Router>
    );
}

export default App;
