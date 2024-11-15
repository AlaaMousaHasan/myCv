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
import './App.css';

function App() {
    return (
        <Router>
            <Layout> {/* Layout wraps all routes */}
                <div className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Header />
                                    <About />
                                    <Section />
                                </>
                            }
                        />
                        {/* About page as a separate route */}
                        <Route
                            path="/about"
                            element={
                        <Layout>
                            <About />
                        </Layout>
                        }
                    />

                        <Route path="/experience" element={<Experience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Layout>
        </Router>
    );
}

export default App;
