import React from 'react';

function Portfolio() {
    const projects = [
        {
            name: "Project 1",
            description: "Description of project 1",
            link: "#"
        },
        // Add more projects as needed
    ];

    return (
        <section id="portfolio" style={{ padding: '20px' }}>
            <h2>Portfolio</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3><a href={project.link}>{project.name}</a></h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Portfolio;
